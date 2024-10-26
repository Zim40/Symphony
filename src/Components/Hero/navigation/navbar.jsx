import { useState, useRef } from "react";
import "./navbar.css";
import brand from "../../../assets/Symphony.png";
import { CSSTransition } from 'react-transition-group';
import { IoIosSearch } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const nodeRef = useRef(null);

    // Handles mobile navbar
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
        console.log(isOpen);
    };

    return (
        <>
            <div className="w-full fixed z-40 bg-SecondaryColor md:bg-transparent md:backdrop-blur-md min-h-16 flex md:items-center justify-between">
                <div className="hidden md:flex w-full pr-4 pl-4">
                    {/* Logo image */}
                    <div className="logo-png mr-6">
                        <img src={brand} alt="Brand Logo - Symphony" className="w-[200px] h-auto" />
                    </div>
                   
                    {/* Nav section */}
                    <ul className="flex  space-x-4 font-mono">
                        {/* Links */}
                        <li className="btn relative inline-flex items-center p-1 cursor-pointer transition-all rounded group">
                            <span className="w-0 h-0 rounded bg-SecondaryColor bg-opacity-70 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-10"></span>
                            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-AccentColor z-10">Home</span>
                        </li>
                        <li className="btn relative inline-flex items-center p-1 cursor-pointer transition-all rounded group">
                            <span className="w-0 h-0 rounded bg-SecondaryColor bg-opacity-70 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-10"></span>
                            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-AccentColor z-10">Explore</span>
                        </li>
                        <li className="btn relative inline-flex items-center p-1 cursor-pointer transition-all rounded group">
                            <span className="w-0 h-0 rounded bg-SecondaryColor bg-opacity-70 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-10"></span>
                            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-AccentColor z-10">Stories</span>
                        </li>
                        <li className="btn relative inline-flex items-center p-1 cursor-pointer transition-all rounded group">
                            <span className="w-0 h-0 rounded bg-SecondaryColor bg-opacity-70 absolute top-0 left-0 ease-out duration-500 transition-all 
                            group-hover:w-full group-hover:h-full -z-10"></span>
                            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-AccentColor z-10">Contact</span>
                        </li>
                        
                    </ul>
                     {/* Search bar */}
                     <div className="flex items-center w-full justify-end  pl-6">
                       
                        <input
                            type="text"
                            name="searchBar"
                            className="rounded bg-SecondaryColor bg-opacity-60 w-full lg:w-1/3 placeholder:px-2 placeholder:text-slate-600"
                        />
                         <label>
                            <IoIosSearch className="w-auto h-6 bg-SecondaryColor bg-opacity-60 rounded-full p-1 ml-2" />
                        </label>
                    </div>
                </div>

                {/* Mobile navigation button + component */}
                <div className="flex w-full items-center md:hidden">
                    <img src={brand} className="flex justify-start items-center mx-4 w-[auto] h-[36px]" alt="Brand Logo - Symphony"/>
                    {isOpen ? (
                        <MdOutlineClose onClick={toggleMenu} className="text-4xl font-semibold ml-auto mx-4 text-AccentColor" />
                    ) : (
                        <RiMenu3Line onClick={toggleMenu} className="text-4xl font-semibold ml-auto mx-4 text-AccentColor" />
                    )}
                </div>
            </div>

            <CSSTransition noderef={nodeRef} in={isOpen} timeout={600} classNames="mobile-menu" unmountOnExit>
                <MobileNav nodeRef={nodeRef} />
            </CSSTransition>
        </>
    );
};

const MobileNav = ({ isOpen, noderef }) => {
    return (
        <>
            {!isOpen ? (
                <div  noderef={noderef} className={`mobile-menu md:hidden relative flex flex-end flex-col items-end w-full h-screen z-10 bg-SecondaryColor px-4 pt-4 `}>
                    <nav className=" w-full flex flex-col list-none items-end justify-end space-y-6 mt-16 text-AccentColor">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Explore</li>
                        <li className="cursor-pointer">Contact</li>
                    </nav>
                </div>
            ) : (
                ""
            )}
        </>
    )
}


