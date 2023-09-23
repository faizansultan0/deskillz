import { Link } from "react-router-dom";
import './globalButton.css';


const GlobalButton = (props) => {
    return (
        <Link to={props.to} className={`global-btn ${props.type}`}>
            {props.text}
        </Link>
    )
}

export default GlobalButton;