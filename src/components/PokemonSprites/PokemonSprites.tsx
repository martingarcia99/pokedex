import React from "react";
import useGetPokemon from "../../hooks/useGetPokemon";

interface PokemonSpritesProps {
    pokemonName?: string;
}

export const PokemonSprites: React.FC<PokemonSpritesProps> = ({ pokemonName }) => {
    const { pokemonData } = useGetPokemon(pokemonName);

    return (
        <div className="flex flex-row justify-between gap-10">
            <div className="flex flex-row shadow-lg bg-gray-100 rounded-lg items-center gap-5 w-full p-10 justify-between">
                <h6 className="text-2xl text-center">Normal</h6>
                <div className="flex flex-row gap-3">
                    <img
                        src={pokemonData?.sprites?.front_default}
                        alt={pokemonName}
                        className="mx-auto bg-white rounded-lg shadow-lg"
                    />
                    <img
                        src={pokemonData?.sprites?.back_default}
                        alt={pokemonName}
                        className="mx-auto bg-white rounded-lg shadow-lg"
                    />
                </div>
            </div>
            <div className="flex flex-row shadow-lg bg-gray-100 rounded-lg items-center gap-5 w-full p-10 justify-between">
                <h6 className="text-2xl text-center">Shiny</h6>
                <div className="flex flex-row gap-3">
                    <img
                        src={pokemonData?.sprites?.front_shiny}
                        alt={pokemonName}
                        className="mx-auto bg-white rounded-lg shadow-lg"
                    />
                    <img
                        src={pokemonData?.sprites?.back_shiny}
                        alt={pokemonName}
                        className="mx-auto bg-white rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    )
}