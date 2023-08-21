import "./Card.css";

export const Card = ({image, text }) => {
    return(
        <div className="card">
            <div className="cardImage" style={{backgroundImage: `url(${image})`}} >
                <div className="imageText">{text}</div>
            </div>
            <div className="cardBorder"></div>
        </div>
    )
};
