import React from 'react';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { Grid } from '../shared/Grid/Grid';
import { useParams } from 'react-router';
import useGetPokemonListByType from '../../hooks/useGetPokemonListByType';

const PokemonListByType: React.FC = () => {
    const { typeName } = useParams();
    const { pokemonList } = useGetPokemonListByType(typeName ?? '');

    return (
        <Grid>
            {pokemonList?.map((pokemon) => (
                <PokemonCard key={pokemon?.pokemon.name} pokemon={pokemon?.pokemon}/>
            ))}
        </Grid>
    );
}

export default PokemonListByType;