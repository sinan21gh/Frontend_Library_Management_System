import {useNavigate} from "react-router-dom";
import LogOutIcon from './assets/Logout.jpg';

function LogOut() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");

        navigate("/login");
    }

    return(
        <img src={LogOutIcon} style={{maxWidth:"50px", cursor:"pointer", marginLeft:"96vw", marginTop:"20px"}}
             alt="Logout" title="Log Out" onClick={handleLogout} />
    )
}
export default LogOut