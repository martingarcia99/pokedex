import { useState } from "react"
import useGetPokemon from "../../hooks/useGetPokemon";
import Modal from "react-modal";
import React from "react";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { useSearchStore } from "../../store/useSearchStore";
import { useGetPokemonList } from "../../hooks/useGetPokemonList";

const SearchModal: React.FC = () => {
    const [isOpen, closeModal] = useSearchStore((state) => [state.isOpen, state.closeModal]);
    const [filter, setFilter] = useSearchStore((state) => [state.filter, state.setFilter]);
    const [currentSearch, setCurrentSearch] = useSearchStore((state) => [state.currentSearch, state.setCurrentSearch]);
    const { pokemonList } = useGetPokemonList(currentSearch);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
        setCurrentSearch(event.target.value.toLowerCase());
    }

    const handleCloseModal = () => {
        closeModal();
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={handleCloseModal} className={'w-2/4 max-h-[80vh] bg-white mx-auto p-5 mt-20 flex flex-col gap-5 items-center shadow-xl rounded-lg border border-black'}>
            <h6 className="text-3xl">Search</h6>
            <input
                type="text"
                value={filter}
                onChange={handleInputChange}
                className="border p-2 w-full"
            />
            <div className="flex flex-row gap-5 flex-wrap justify-center overflow-y-auto">
                {currentSearch && pokemonList?.map((pokemon) => (
                    <PokemonCard key={pokemon?.name} pokemon={pokemon}/>
                ))}
            </div>
        </Modal>
    );
}

export default SearchModal;