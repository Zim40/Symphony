import { useState, useEffect } from "react";
import image_1 from "../../assets/main(2).jpg";
import Navbar from "./navigation/navbar.jsx";


/* Only do standard image for background and blur it for individual sections. */
export default function Hero() {


    return (
        <>
            <Navbar />
            <div className="relativeh-full">
                <img src={image_1} className="h-full w-full absolute top-0 left-0 object-cover z-0" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 flex-col min-h-full w-full">
                    <h1 className="text-white text-5xl font-semibold">Find your Symphony.</h1>
                    <button className="origin-bottom hover:rotate-6 duration-200 border-2 mt-6 px-4 py-2 rounded-xl w-1/5 bg-black bg-opacity-30 shadow-xl hover:border-black hover:shadow-white hover shadow-md">Start Here</button>

                </div>
            </div>
        </>
    )
}