import "./Button.css";

export const Button = ({text, style}) => {
    return(
        <button className={`btnFactoria ${style}`}>{text}</button>
    )
};
