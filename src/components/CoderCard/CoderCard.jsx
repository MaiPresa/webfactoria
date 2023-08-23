import "./CoderCard.css";

export const CoderCard = ({showImage, imagen, nombre, apellidos, dni, bootcamp, estado, porcentaje}) => {

    return(
        <div className="coderCardContainer">
            {showImage &&
            <img className="coderImage" src={imagen} alt="Foto del alumno" />
        }

            <div className="coderCardInfo">
                <div className="coderNameSurname">
                    <h3>{nombre} {apellidos}</h3>
                    <h3>{dni}</h3>
                </div>
                <div className="coderProps">
                    <div className="coderBootcamp">
                        <p>{bootcamp}</p>
                    </div>
                    <p className={estado}>{estado}</p>
                    <p>{porcentaje}</p>
                </div>
            </div>
        </div>
    )
};
