import { useSearchStore } from "../../../store/useSearchStore"
import React from "react";

export const SearchButton = () => {
    const openModal = useSearchStore((state) => state.openModal);
    return (
        <button className='text-white hover:text-white hover:bg-blue-400 p-2 bg-slate-950 rounded-lg' onClick={openModal} data-testid='search-button'>Search</button>
    )
}