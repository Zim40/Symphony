import { useState } from "react";

import brand from "../../../assets/Symphony.png";
import { IoIosSearch } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";


/* Set class to hidden for standard navbar then build a seperate mobile navbar for smailler devices.
-- focus on creating navbars and then adding functionality reflecting a single page application (SPA). */
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }


    return (
        <>
            <div className={` relative w-full fixed z-40  backdrop-blur-sm `}>
                <div className="p-2">
                    
                    <ul className="flex items-center space-x-6 px-4">
                        <img src={brand} alt="logo" className="text-sm mr-auto  w-auto h-[30px] lg:h-[px]" />
                        <div className="flex items-center space-x-2 w-full justify-center">
                            <label><IoIosSearch className="w-auto h-6" /></label>
                            <input type="text" name="searchBar"
                                placeholder="Search" className=" 
                            border border-slate-600
                            rounded backdrop-blur-lg bg-transparent w-full lg:w-1/2 px-2  placeholder:px-2 placeholder:text-slate-600"></input>
                        </div>
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Explore</li>
                        <li className="cursor-pointer">Contact</li>
                    </ul>
                    
                    
                </div> 
               
                {/* <MobileNav toggleMenu={toggleMenu} /> */}
            </div>
        </>
    )
};

// const MobileNav = ({ toggleMenu }) => {
//     return (
//         <>
//         <div className="block text-righ"><RiMenu3Line /></div>
//             <div className="w-full bg-gray-400">
//                 <div className="flex flex-col justify-end items-end">
//                     <ul>
//                         <li className="cursor-pointer">Home</li>
//                         <li className="cursor-pointer">Explore</li>
//                         <li className="cursor-pointer">Contact</li>
//                     </ul>
//                 </div>

//             </div>

//         </>

//     )
// }

