import brand from "../../../assets/Symphony.png";


/* Set class to hidden for standard navbar then build a seperate mobile navbar for smailler devices.
-- focus on creating navbars and then adding functionality reflecting a single page application (SPA). */
export default function Navbar() {

    return (
        <>
            <div  className={`bg-black bg-opacity-20 relative w-full fixed z-40  backdrop-blur-sm`}>
                <div>
                    <ul className="flex space-x-3 items-center p-4">
                        <img src={brand} alt="logo" className="text-sm mr-auto  w-auto h-[60px] lg:h-[50px]" />
                        <li className="">Home</li>
                        <li className="">Explore</li>
                        <li className="">Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}