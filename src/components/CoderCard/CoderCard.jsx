import "./CoderCard.css";

import { Link } from "react-router-dom";



export const CoderCard = ({showImage, imagen, NOMBRE, APELLIDOS, MOVIL, BOOTCAMP, ESTADO, porcentaje, id}) => {

    return(
        <Link to={`/ficha/${id}/${showImage}`} className="linkStyles coderCardContainer">

            <div className="coderCardContainer">
                {showImage &&
                <img className="coderImage" src={imagen} alt="Foto del alumno" />
                }

                <div className="coderCardInfo">
                    <div className="coderNameSurname">
                        <h3>{NOMBRE} {APELLIDOS}</h3>
                        <h4>{MOVIL}</h4>
                    </div>
                    <div className="coderProps">
                        <div className="coderBootcamp">
                            <p>{BOOTCAMP}</p>
                        </div>
                        {(showImage && ESTADO) &&
                        <p className={ESTADO.toLowerCase()}>{(ESTADO=="ESPERA") ? "EN ESPERA" : ESTADO }</p>}
                        {/* <p>{porcentaje}</p> */}
                    </div>
                </div>
            </div>
        
        </Link>


    )
};
