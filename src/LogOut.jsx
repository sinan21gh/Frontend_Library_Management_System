import {useNavigate} from "react-router-dom";

function LogOut() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");

        navigate("/login");
    }

    return(
        <button onClick={handleLogout}>Log Out</button>
    )
}
export default LogOut