import "./Fichaalumno.css";

import { codersAPI } from "../../components/services/codersAPI";

import { CoderCard } from "./../../components/CoderCard/CoderCard";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { BackButton } from "../../components/BackButton/BackButton";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import coderimage from "./../../assets/images/coders.jpg";


export const Fichaalumno = () => {
    const params = useParams();
    const coderID = params.id;
    const imageParam = params.showImage;

    const showImage = (imageParam === "false") ? false : true;

    const [coder, setCoder] = useState([]);

    useEffect(() => {
        codersAPI().then((coders) => {
            const coder = coders.find((coder) => coder.ID_CODER == coderID)
            setCoder(coder)
            delete coder.ID_CODER
        });
    }, [coderID]);


    return(
        <main className="fichaContainer" >
            <BackButton />
            {coder &&
            <CoderCard key={coderID} id={coderID} showImage={showImage} {...coder} imagen={coderimage} />}

           { Object.keys(coder).map((key, i) => <Input label={key} text={coder[key]} key={i} /> )}
            
            <Button text={(!showImage || coder.ESTADO=="ESPERA") ? "ADMITIR" : "GUARDAR"} style="btnOrange" />

            {!showImage &&
            <Button text="EN ESPERA" style="btnPaleOrange" />}

            <Button text={showImage ? "CANCELAR" : "RECHAZAR"}  style="btnOutline" />
            
        </main>
    )
};
