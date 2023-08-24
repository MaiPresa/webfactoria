import "./Postulantes.css";
import { codersAPI } from "../../components/services/codersAPI";

import { BackButton } from "../../components/BackButton/BackButton";

import { CoderCard } from "../../components/CoderCard/CoderCard";
import { useState, useEffect } from "react";


export const Postulantes = () => {
    const [coders, setCoders] = useState([]);

    useEffect(() => {
        codersAPI().then((coders) => setCoders(coders));
    }, []);

    return (

        <main className="postulantesContainer">
            <BackButton/>
            {coders && coders.map(({ID_CODER, ESTADO, ...coder}) => 
                <CoderCard key={ID_CODER} id={ID_CODER} showImage={false} {...coder} />
            )}
        </main>
    )
}
