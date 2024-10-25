import { useState, useEffect } from "react";
import image_1 from "../../assets/main(2).jpg";
import Navbar from "./navigation/navbar.jsx";


/* sort image overlay extended beyond border */
export default function Hero() {


    return (
        <>
            
            <div className="Symphony">
                <img src={image_1} className="h-full w-full absolute top-0 left-0 object-cover z-0" />
                <div className=" absolute top-0 left-0 h-full w-full bg-black bg-opacity-20 overflow-hidden"></div>
            </div>
            <Navbar />
        </>
    )
}