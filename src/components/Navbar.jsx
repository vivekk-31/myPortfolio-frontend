import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeToggle from './ThemeToggle';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // useEffect(() => {
    //     document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    //     return () => (document.body.style.overflow = 'auto');
    // }, [isOpen]);

    const toggleSection=()=>{
        const element = document.getElementById("home");
       if (element) {
         element.scrollIntoView({ behavior: "smooth" });
       }
     }

    return (
        <nav className="sticky top-0 z-50 bg-[#F2F0E6] text-[#5a6b27] dark:bg-[#1a1a1a] dark:text-gray-300 px-4 py-5 md:h-22 ">
            <div className="flex justify-between items-center">

                <div onClick={toggleSection} className="text-xl md:text-3xl font-bold md:font-semibold cursor-pointer md:mx-65 mx-2">Vivek Singh</div>

                <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <GiHamburgerMenu />
                </div>

                <ul className="hidden md:flex flex-wrap list-none gap-10 items-center font-semibold text-lg mx-25 my-2 ">
                    <li><ThemeToggle /></li>
                    <a href="#home" onClick={() => setIsOpen(false)} className="hover:scale-105 active:scale-90 transition-transform font-semibold text-2xl">Home</a>
                    <a href="#about" onClick={() => setIsOpen(false)} className="hover:scale-105 active:scale-90 transition-transform font-semibold text-2xl">About</a>
                    <a href="#projects" onClick={() => setIsOpen(false)} className="hover:scale-105 active:scale-90 transition-transform font-semibold text-2xl">Projects</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="hover:scale-105 active:scale-90 transition-transform font-semibold text-2xl">Contact</a>
                </ul>
            </div>

            {isOpen && (<>
                <ul className="md:hidden fixed  h-full left-0 w-full z-40  flex flex-col items-center gap-10 py-4 font-semibold text-lg bg-[#F2F0E6] dark:bg-[#1a1a1a]">
                    <li><ThemeToggle /></li>
                    <a href="#home" onClick={() => setIsOpen(false)} className="hover:scale-105 transition-transform">Home</a>
                    <a href="#about" onClick={() => setIsOpen(false)} className="hover:scale-105 transition-transform">About</a>
                    <a href="#projects" onClick={() => setIsOpen(false)} className="hover:scale-105 transition-transform">Projects</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="hover:scale-105 transition-transform">Contact</a>
                </ul>
            </>)}
        </nav>
    );
};

export default Navbar;
