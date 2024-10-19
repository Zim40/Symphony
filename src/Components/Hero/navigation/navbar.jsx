import { useState } from "react";

export default function Navbar() {
    return (
        <>
            <div className="w-full">
                <div>
                    
                    <ul className="flex space-x-3">
                    <span className="text-sm mr-auto">brand</span>
                        <li className="text-sm">item-1</li>
                        <li className="text-sm">item-2</li>
                        <li className="text-sm">item-3</li>
                        <li className="text-sm">item-4</li>
                        <li className="text-sm">item-5</li>
                    </ul>
                </div>
            </div>
        </>
    )
}