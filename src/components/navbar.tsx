import React from "react";

const Navbar: React.FC = () => {
    const searchHandler = () => {}

    return (
        <nav className="w-full bg-green-400 border shadow h-16 md:h-32">
            <div className="flex mx-auto justify-between items-center w-full h-14 md:h-28">
                <div className="ml-2 md:ml-4">
                    <h1 className="md:text-4xl">Al-Quran</h1>
                </div>
                <div className="bg-white flex justify-end items-center outline rounded w-3/5 md:w-2/5 gap-2 md:gap-4 mr-2 md:mr-8">
                    <input
                        id="search-input"
                        type="text"
                        className="outline rounded-l w-full p-1 md:p-4" 
                        value="" />
                    <button
                        className="flex items-center p-1 md:p-2 mr-2 md:mr-4 text-black cursor-pointer transition-all scale-125"
                        type="submit"
                        onClick={searchHandler} >
                        <span className="material-symbols-outlined">search</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
