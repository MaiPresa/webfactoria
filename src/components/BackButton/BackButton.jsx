import "./BackButton.css";

import { useNavigate } from "react-router-dom";


export const BackButton = () => {

    let history = useNavigate();

    return(
        <button onClick={() => history(-1)} className="btnBack"> &lt; Volver </button>
    )
};
