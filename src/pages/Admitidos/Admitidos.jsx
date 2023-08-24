import "./Admitidos.css";
import { codersAPI } from "../../components/services/codersAPI";

import { useState, useEffect } from "react";

import { CoderCard } from "../../components/CoderCard/CoderCard";

import codersimg from "./../../assets/images/coders.jpg";
import { BackButton } from "../../components/BackButton/BackButton";


export const Admitidos = () => {

    const [coders, setCoders] = useState([]);
        
    useEffect(() => {
        codersAPI().then((coders) => setCoders(coders));
    }, []);

    return (

        <main className="admitidosContainer">
            <BackButton />
            {coders && coders.map(({ID_CODER, ...coder}) => 
                    <CoderCard imagen={codersimg} key={ID_CODER} showImage={true} id={ID_CODER} {...coder} />
            )}
        </main>       

    )
}
