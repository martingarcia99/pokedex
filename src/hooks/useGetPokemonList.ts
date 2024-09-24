import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { BASE_URL } from '../constants/urls';
import { PokemonListItem } from '../interfaces/PokemonListItem';

interface PokemonList {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
    param?: string
    isSearch?: boolean;
}

export const useGetPokemonList = (param?: string) => {
    const [url, setUrl] = useState(param != null ? `${BASE_URL}/pokemon?limit=1000` : `${BASE_URL}/pokemon?limit=36`);

    const { data, isLoading, error } = useQuery<PokemonList>({
        queryKey: ['pokemonList', url],
        queryFn: async () => {
            const response = await fetch(url);
            if(!response.ok) throw new Error('Network response was not ok');
            return response.json();
        }
    });

    const filteredPokemonList = param ? data?.results?.filter(pokemon => pokemon.name.startsWith(param!.toLowerCase())) : [];

    const goToNextPage = () => {
        if(data?.next) setUrl(data.next);
    }

    const goToPreviousPage = () => {
        if(data?.previous) setUrl(data.previous);
    }

    return {
        pokemonList: param ? filteredPokemonList : data?.results ?? [],
        isLoading,
        error: error?.message ?? null,
        goToNextPage: data?.next ? goToNextPage : undefined,
        goToPreviousPage: data?.previous ? goToPreviousPage : undefined
    }
}