import "./Input.css";

export const Input = ({label, text}) => {
    return(
        <div className="inputStyles">
            <label htmlFor="">{label.toLowerCase()}</label> <br/>
            <input type="text" defaultValue={text} />
        </div>
    )
}
