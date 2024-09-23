import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from '../constants/urls';
import { PokemonData } from '../interfaces/PokemonData';

const useGetPokemon = (pokemonName?: string, pokemonid?: number) => {
    const { data: pokemonData, isLoading, error } = useQuery<PokemonData>({
        queryKey: ['pokemon', pokemonName, pokemonid],
        queryFn: async () => {
            const response = await fetch(`${BASE_URL}/pokemon/${pokemonName ?? pokemonid}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        }
    })

    return { pokemonData, isLoading, error: error?.message?? null  };
}

export default useGetPokemon;