import React, { useMemo } from "react";
import useGetPokemon from "../../hooks/useGetPokemon";
import { useParams } from "react-router";
import { getMainPokemonType } from "../../utils/getMainPokemonType";
import { capitilizeFirstLetter } from "../../utils/capitilizeFirstLetter";
import { convertLbsToKg } from "../../utils/convertLbsToKg";
import { convertInchesToCm } from "../../utils/convertInchesToCm";
import { PokemonSprites } from "../PokemonSprites/PokemonSprites";
import { TypeIcons } from "../shared/TypeIcons/TypeIcons";

export const PokemonInfo = () => {
    const { pokemonName } = useParams();
    const { pokemonData } = useGetPokemon(pokemonName);
    const mainType = useMemo(() => pokemonData && getMainPokemonType(pokemonData), [pokemonData]);

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-row shadow-lg bg-gray-100 rounded-lg items-center gap-5 relative">
                <div className={`${mainType}-background w-72 h-72 rounded-l-lg items-center`}>
                    <img 
                        src={pokemonData?.sprites?.front_default}
                        alt={pokemonData?.name ?? ''}
                        className="mx-auto w-72 h-72"
                    />
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex">
                        <h1 className="text-3xl">{capitilizeFirstLetter(pokemonData?.name ?? '')}</h1>
                    </div>
                    <div className="flex flex-row gap-10">
                        <span>{`Weight: ${convertLbsToKg(pokemonData?.weight ?? 0)} kg`}</span>
                        <span>{`Height: ${convertInchesToCm(pokemonData?.height ?? 0)} cm`}</span>
                    </div>
                </div>
                <TypeIcons types={pokemonData?.types ?? []} />
            </div>
            <PokemonSprites pokemonName={pokemonName} />
        </div>
    )
}