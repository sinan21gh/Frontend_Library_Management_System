import {useNavigate} from "react-router-dom";

function Dropdown(){
    const navigate = useNavigate();

    function GoTo(link){
        navigate(`/${link}`);
    }

    return(
        <div className="container">
            <button className="cb">☰</button>
            <div className="dropdown">
                <ul>
                    <li onClick={() => GoTo("login")}>Login</li>
                    <li onClick={() => GoTo("profile")}>Profile</li>
                    <li onClick={() => GoTo("")}>Register</li>
                    <li onClick={() => GoTo("book")}>Upload Book</li>
                    <li onClick={() => GoTo("books")}>Home</li>
                </ul>
            </div>
        </div>
    )
}
export default Dropdown