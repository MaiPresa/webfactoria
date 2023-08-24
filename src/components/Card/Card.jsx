import "./Card.css";

import { Link } from "react-router-dom";

export const Card = ({image, text, to }) => {
    return(
        <Link to={to} className="card">
            <div>
                <div className="cardImage" style={{backgroundImage: `url(${image})`}} >
                    <div className="imageText">{text}</div>
                </div>
                <div className="cardBorder"></div>
            </div>
        </Link>

    )
};
