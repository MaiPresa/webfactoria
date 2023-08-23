import "./Postulantes.css";

import { CoderCard } from "../../components/CoderCard/CoderCard";

export const Postulantes = () => {
    return (
        <main className="postulantesContainer">
            <CoderCard nombre="Maite" apellidos="Presa Arribas" dni="XXXXXXXX-X"
            bootcamp="FEM" porcentaje="100" showImage={false} />

            <CoderCard nombre="Maite" apellidos="Presa Arribas" dni="XXXXXXXX-X"
            bootcamp="FEM" porcentaje="100" showImage={false} />
        </main>
    )
}
