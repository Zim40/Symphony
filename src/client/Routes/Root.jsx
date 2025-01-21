import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import { Outlet } from "react-router-dom";


export default function Root() {
    return (

        <>
            <Header />
            <Hero h1="Updates and Analysis of Global War News" h2="Symphony: Global Conflict Coverage" geo1="Ukraine" geo2="Yemen" geo3="Syria" geo4="China" />
            <section>
              <Outlet />
            </section>
           
        </>

    )
}