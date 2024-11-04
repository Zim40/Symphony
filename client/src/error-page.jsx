import { useRouteError } from "react-router-dom";
import { PiWarning } from "react-icons/pi";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(`${error.message || error.statusText} | Go Back!`);

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-AccentColor">
            <div className="flex flex-col items-center justify-center text-white space-y-4 bg-PrimaryColor shadow-md shadow-black px-4 py-2 rounded-lg">
                <PiWarning className="w-[100px] h-auto text-amber-400" />
                <h1 className="text-4xl font-semibold tracking-wide">Oops!</h1>
                <p className="tracking-widest">A Small <span>Error</span> Has Occured...</p>
                <p className="tracking-wide text-red-400">
                    <i >{error.statusText || error.message}</i>
                </p>
            </div>

        </div>
    );
}