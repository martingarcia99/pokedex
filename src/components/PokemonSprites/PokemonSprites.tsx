import React from "react";
import useGetPokemon from "../../hooks/useGetPokemon";

interface PokemonSpritesProps {
    pokemonName?: string;
}

export const PokemonSprites: React.FC<PokemonSpritesProps> = ({ pokemonName }) => {
    const { pokemonData } = useGetPokemon(pokemonName);

    return (
        <div className="flex md:flex-row flex-col justify-between gap-10" data-testid='pokemon-sprites'>
            {pokemonData?.sprites?.front_default && <div className="flex flex-row shadow-lg bg-gray-100 rounded-lg items-center gap-5 w-full p-3 justify-around">
                <h6 className="text-2xl text-center">Normal</h6>
                <div className="flex md:flex-row flex-col gap-3">
                    <img
                        src={pokemonData?.sprites?.front_default}
                        alt={`${pokemonData?.name ?? ""} front default`}
                        className="mx-auto bg-white rounded-lg shadow-lg"
                    />
                    <img
                        src={pokemonData?.sprites?.back_default}
                        alt={`${pokemonData?.name ?? ""} back default`}
                        className="mx-auto bg-white rounded-lg shadow-lg"
                    />
                </div>
            </div>}
            {pokemonData?.sprites?.front_shiny && <div className="flex flex-row shadow-lg bg-gray-100 rounded-lg items-center gap-5 w-full p-3 justify-around">
                <h6 className="text-2xl text-center">Shiny</h6>
                <div className="flex md:flex-row flex-col gap-3">
                    <img
                        src={pokemonData?.sprites?.front_shiny}
                        alt={`${pokemonData?.name ?? ""} front shiny`}
                        className="mx-auto bg-white rounded-lg shadow-lg"
                    />
                    <img
                        src={pokemonData?.sprites?.back_shiny}
                        alt={`${pokemonData?.name ?? ""} back shiny`}
                        className="mx-auto bg-white rounded-lg shadow-lg"
                    />
                </div>
            </div>}
        </div>
    )
}