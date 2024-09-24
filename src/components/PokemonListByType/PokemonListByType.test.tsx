import React from "react";
import { useParams } from "react-router";
import PokemonListByType from "./PokemonListByType";
import useGetPokemonListByType from "../../hooks/useGetPokemonListByType";
import { renderWithProviders } from "../../testUtils/renderWithProviders";

jest.mock('react-router', () => ({
    useParams: jest.fn(),
    useNavigate: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    BrowserRouter: ({children}: {children: React.ReactNode }) => <div>{children}</div>
}));

jest.mock('../../hooks/useGetPokemonListByType', () => jest.fn());

describe("PokemonListByType", () => {
    beforeEach(() => {
        (useParams as jest.Mock).mockReturnValue({ typeName: 'fire' });
        (useGetPokemonListByType as jest.Mock).mockReturnValue({
            pokemonList: [
                { pokemon: { name: 'Charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' } },
                { pokemon: { name: 'Charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' } },
            ],
        });
    });

    afterEach(() => jest.clearAllMocks());

    it('should render a list of PokemonCards', () => {
        const { queryAllByTestId } = renderWithProviders(<PokemonListByType />);
        expect(queryAllByTestId('pokemon-card')).toHaveLength(2);
    });
});