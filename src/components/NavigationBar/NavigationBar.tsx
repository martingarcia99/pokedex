import React from "react"
import { Link } from "react-router-dom"
import pokeball from '../../assets/pokeball.png'
import { SearchButton } from "../shared/Button/SearchButton";

const NavigationBar: React.FC = () => (
    <nav className="mx-auto bg-gray-200 flex justify-between h-14 items-center shadow-xl fixed top-0 z-10 w-full">
        <div className="mx-auto flex justify-between items-center w-9/12">
            <Link to="/">
                <img src={pokeball} alt='Poke Logo' className="w-10 h-10"/>
            </Link>
            <div className="flex gap-2 items-center">
                <Link className='text-white hover:text-white hover:bg-blue-400 p-2 bg-slate-950 rounded-lg' to='/'>Pokedex</Link>
                <Link className='text-white hover:text-white hover:bg-blue-400 p-2 bg-slate-950 rounded-lg' to='/favorite'>Favorite</Link>
                <SearchButton />
            </div>
        </div>
    </nav>
);

export default NavigationBar;