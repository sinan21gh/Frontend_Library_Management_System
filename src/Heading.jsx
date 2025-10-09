import {useNavigate} from "react-router-dom";

function Heading(props){
    const navigate = useNavigate();

    function goTo(to){
        navigate(`/${to}`);
    }
    return(
        <header className="heading2">
            <h1>Library4u</h1>
            <div className="heading2divs">
                <button id="b111" onClick={() => goTo("")}>Create Account</button>
                <button id="b222" onClick={() => goTo("login")}>Login</button>
            </div>
            <h2>{props.heading}</h2>

        </header>
    )
}
export default Heading