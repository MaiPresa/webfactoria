import "./Admitidos.css";

import { CoderCard } from "../../components/CoderCard/CoderCard";

import glasses from "./../../assets/images/glasses.jpg";

export const Admitidos = () => {
    return (
        <main className="admitidosContainer">
            <CoderCard imagen={glasses} nombre="Maite" apellidos="Presa Arribas" dni="XXXXXXXX-X"
            bootcamp="FEM" porcentaje="100" showImage={true} />

            <CoderCard imagen={glasses} nombre="Maite" apellidos="Presa Arribas" dni="XXXXXXXX-X"
            bootcamp="FEM" porcentaje="100" showImage={true} />

        </main>

    )
}
