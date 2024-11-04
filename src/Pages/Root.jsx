import Hero from "../Components/Hero/index.jsx";
import Footer from "../Components/Footer/index.jsx";
import { Outlet } from "react-router-dom";

export default function Root () {
    return (
<>
<Hero />
<div>
    <Outlet />
</div>
<Footer />
</>
    )
}