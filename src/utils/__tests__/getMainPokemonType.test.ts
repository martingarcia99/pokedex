import { PokemonData } from "../../interfaces/PokemonData";
import { getMainPokemonType } from "../getMainPokemonType";

describe('getMainPokemonType', () => {
    it('should return the first type if there are many types', () => {
        const pokemonData: PokemonData = {
            types: [
                {
                    slot: 1,
                    type: {
                        name: 'fire',
                        url: 'https://pokeapi.co/api/v2/type/10'
                    }
                },
                {
                    slot: 2,
                    type: {
                        name: 'water',
                        url: 'https://pokeapi.co/api/v2/type/11'
                    }
                },
            ],
            name: "",
            id: 0,
            height: 0,
            weight: 0,
            sprites: { front_default: ''}
        };
        expect(getMainPokemonType(pokemonData)).toBe('fire');
    });

    it('should return undefined if the pokemon has no types', () => {
        const pokemonData: PokemonData = {
            types: [],
            name: "",
            id: 0,
            height: 0,
            weight: 0,
            sprites: { front_default: ''}
        };
        expect(getMainPokemonType(pokemonData)).toBeUndefined();
    });
});