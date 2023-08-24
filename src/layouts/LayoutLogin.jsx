import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";

export const LayoutLogin = () => {
    return(
        <>
            <NavBar />
            <Outlet/>
            <Footer />
        </>

    )
}
