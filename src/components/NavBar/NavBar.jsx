import "./NavBar.css";

import { Link } from "react-router-dom";

import f5Small from "./../../assets/icons/Logo_FF5.svg";


export const NavBar = () => {
    return(
        <nav className="factoriaNav">
            <Link to="/home">
                <img src={f5Small} alt="Factoría Logo" />
            </Link>
        </nav>
    )
}
