import { useState } from "react";

import brand from "../../../assets/Symphony.png";
import { IoIosSearch } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";


/* Set class to hidden for standard navbar then build a seperate mobile navbar for smailler devices.
-- focus on creating navbars and then adding functionality reflecting a single page application (SPA). */
let hover = "transform transition-all duration-400 hover:scale-110 hover:bg-white hover:bg-opacity-20  rounded-3xl";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }


    return (
        <>
            <div className={` relative w-full fixed z-40  backdrop-blur-sm `}>
                <div className="flex pt-4">
                    <img src={brand} alt="logo" className="text-sm mr-auto pl-6 w-auto h-[30px] lg:h-[px]" />
                    <ul className="flex items-center space-x-6 w-full px-4 font-mono">
                        <div className="flex items-center space-x-2 w-full justify-center">

                            <label><IoIosSearch className="w-auto h-6" /></label>
                            <input type="text" name="searchBar"
                                placeholder="Search" className=" 
                            
                            rounded bg-black bg-opacity-30 w-full lg:w-1/2 px-2  placeholder:px-2 placeholder:text-slate-600"></input>
                        </div>
                        <li className="btn relative inline-flex items-center p-1 cursor-pointer justify-start  transition-all   rounded  group">

                            {/* purple box */}
                            <span className="w-0 h-0 rounded bg-AltColor bg-opacity-20 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-SecondaryColor z-10">
                                Home
                            </span>
                        </li>
                        <li className="btn relative inline-flex items-center p-1 cursor-pointer justify-start  transition-all   rounded  group">

                            {/* purple box */}
                            <span className="w-0 h-0 rounded bg-PrimaryColor bg-opacity-20 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-text-SecondaryColor z-10">
                                Explore
                            </span>
                        </li>
                        <li className="btn relative inline-flex items-center p-1 cursor-pointer justify-start  transition-all   rounded  group">

                            {/* purple box */}
                            <span className="w-0 h-0 rounded bg-black bg-opacity-20 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-text-SecondaryColor z-10">
                                Contact
                            </span>
                        </li>
                    </ul>


                </div>

                {/* <MobileNav toggleMenu={toggleMenu} /> */}
            </div>
        </>
    )
};

const MobileNav = ({ toggleMenu }) => {
    return (
        <>
            <div className="relative flex flex-end justify-end text-3xl w-full"><RiMenu3Line /></div>
            <div className="absolute top-10 left-0 h-full w-full backdrop-blur-md">
                <div className="flex flex-col items-end ">
                    <ul className="space-y-4">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Explore</li>
                        <li className="cursor-pointer">Contact</li>
                    </ul>
                </div>

            </div>

        </>

    )
}

