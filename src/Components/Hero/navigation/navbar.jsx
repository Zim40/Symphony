import { useState, useRef } from "react";
import "./navbar.css";
import brand from "../../../assets/Symphony.png";
import { CSSTransition } from 'react-transition-group';
import { IoIosSearch } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";



/* Set class to hidden for standard navbar then build a seperate mobile navbar for smailler devices.
-- focus on creating navbars and then adding functionality reflecting a single page application (SPA). */
let hover = "transform transition-all duration-400 hover:scale-110 hover:bg-white hover:bg-opacity-20  rounded-3xl";


// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(true);
//     const [inProp, setInProp] = useState(false);
//     const nodeRef = useRef(null);
//     //Handles mobile navbar
//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//         setInProp(!inProp);
//         console.log(isOpen)
//     }

//     return (
//         <>
//             <div className={`w-full fixed z-40  backdrop-blur-sm min-h-16 flex md:items-center justify-between`}>
//                 <div className="hidden md:flex w-full pr-4 pl-4">
//                     {/* Logo image */}
//                     <div className="logo-png">
//                         <img src={brand} alt="logo" className="text-sm  w-[200px] h-auto lg:h-[px]" />
//                     </div>
//                     {/* Search bar */}
//                     <div className="flex items-center  w-full justify-end pr-6">
//                         <label><IoIosSearch className="w-auto h-6 bg-black bg-opacity-20 rounded-full p-1 mr-2" /></label>
//                         <input type="text" name="searchBar"
//                             className="rounded bg-black bg-opacity-30 w-full lg:w-1/4 placeholder:px-2 placeholder:text-slate-600"></input>
//                     </div>
//                     {/* Nav section */}
//                     <ul className="flex space-x-4 font-mono ">
//                         <li className="tester btn relative inline-flex items-center p-1 cursor-pointer justify-start  transition-all   rounded  group">

//                             {/* purple box */}
//                             <span className="w-0 h-0 rounded bg-PrimaryColor bg-opacity-20 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
//                             <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-black z-10">
//                                 Home
//                             </span>
//                         </li>
//                         <li className="btn relative inline-flex items-center p-1 cursor-pointer justify-start  transition-all   rounded  group">

//                             {/* purple box */}
//                             <span className="w-0 h-0 rounded bg-PrimaryColor bg-opacity-20 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
//                             <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-text-SecondaryColor z-10">
//                                 Explore
//                             </span>
//                         </li>
//                         <li className="btn relative inline-flex items-center p-1 cursor-pointer justify-start  transition-all   rounded  group">

//                             {/* purple box */}
//                             <span className="w-0 h-0 rounded bg-black bg-opacity-20 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
//                             <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-text-SecondaryColor z-10">
//                                 Contact
//                             </span>
//                         </li>
//                     </ul>
//                 </div>
//                 {/* Mobile navigation button + component */}
//                 <div className="w-full md:hidden">
//                     {isOpen ? (
//                         <RiMenu3Line onClick={toggleMenu} className="text-4xl font-semibold ml-auto mx-4 mt-4" />
//                     ) : (
//                         <MdOutlineClose onClick={toggleMenu} className="text-4xl font-semibold ml-auto mx-4 mt-4" />
//                     )}
                    
//                 </div>
//             </div>
//             <CSSTransition nodeRef={nodeRef} in={inProp} timeout={600} className="mobile-menu">
//                         <MobileNav isOpen={isOpen} ref={nodeRef} />
//                     </CSSTransition>
//         </>
//     )
// };

const MobileNav = ({ isOpen, noderef }) => {
    return (
        <>

            {!isOpen ? (
                <div  noderef={noderef} className={`mobile-menu md:hidden relative flex flex-end flex-col items-end w-full h-screen z-10 backdrop-blur-md px-4 pt-4 `}>
                    <nav className=" w-full flex flex-col list-none items-end justify-end space-y-6 mt-16">
                        <li className="cursor-pointer border-b-2 border-black">Home</li>
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
            <div className="w-full fixed z-40 bg-PrimaryColor md:bg-transparent md:backdrop-blur-sm min-h-16 flex md:items-center justify-between">
                <div className="hidden md:flex w-full pr-4 pl-4">
                    {/* Logo image */}
                    <div className="logo-png">
                        <img src={brand} alt="logo" className="w-[200px] h-auto" />
                    </div>
                    {/* Search bar */}
                    <div className="flex items-center w-full justify-center  pl-6 pr-6">
                        <label>
                            <IoIosSearch className="w-auto h-6 bg-black bg-opacity-20 rounded-full p-1 mr-2" />
                        </label>
                        <input
                            type="text"
                            name="searchBar"
                            className="rounded bg-black bg-opacity-30 w-full lg:w-1/2 placeholder:px-2 placeholder:text-slate-600"
                        />
                    </div>
                    {/* Nav section */}
                    <ul className="flex space-x-4 font-mono">
                        {/* Links */}
                        <li className="btn relative inline-flex items-center p-1 cursor-pointer transition-all rounded group">
                            <span className="w-0 h-0 rounded bg-PrimaryColor bg-opacity-20 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-10"></span>
                            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-black z-10">Home</span>
                        </li>
                        <li className="btn relative inline-flex items-center p-1 cursor-pointer transition-all rounded group">
                            <span className="w-0 h-0 rounded bg-PrimaryColor bg-opacity-20 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-10"></span>
                            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-black z-10">Explore</span>
                        </li>
                        <li className="btn relative inline-flex items-center p-1 cursor-pointer transition-all rounded group">
                            <span className="w-0 h-0 rounded bg-PrimaryColor bg-opacity-20 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-10"></span>
                            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-black z-10">Stories</span>
                        </li>
                        <li className="btn relative inline-flex items-center p-1 cursor-pointer transition-all rounded group">
                            <span className="w-0 h-0 rounded bg-PrimaryColor bg-opacity-20 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-10"></span>
                            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-black z-10">Contact</span>
                        </li>
                        
                    </ul>
                </div>

                {/* Mobile navigation button + component */}
                <div className="flex w-full items-center md:hidden">
                    <img src={brand} className="flex justify-start items-center mx-4 w-[auto] h-[25px]"/>
                    {isOpen ? (
                        <MdOutlineClose onClick={toggleMenu} className="text-4xl font-semibold ml-auto mx-4" />
                    ) : (
                        <RiMenu3Line onClick={toggleMenu} className="text-4xl font-semibold ml-auto mx-4" />
                    )}
                </div>
            </div>

            <CSSTransition noderef={nodeRef} in={isOpen} timeout={600} classNames="mobile-menu" unmountOnExit>
                <MobileNav nodeRef={nodeRef} />
            </CSSTransition>
        </>
    );
}


