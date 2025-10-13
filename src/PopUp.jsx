import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function PopUp(){
    const [message, setMessage] = useState(null);
    const [tem, setTem] = useState("s");
    const navigate = useNavigate();

    const deleting = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.delete("http://localhost:8080/deleteuser", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (res.status === 204){
                setMessage("Successfully deleted");
            }
            setTimeout(() => {
                navigate("/login")
            }, 3000)
        }
        catch (e) {
            console.log(e);
            setMessage("Could not delete account")
        }

    }

    const x = () => {
        setTem(null);
    }

    return(
        <>
        {tem ? <div id="popping">
                <div id="db6">
                    <h3>Are you sure you want to delete your account?</h3>
                    <button onClick={x} style={{float:"left"}}>Go Back</button>
                    <br/>
                    <br/>
                    <button onClick={deleting} style={{marginTop:"0"}}>Delete Account</button>
                </div>
            </div> : null}
        </>



    )
}
export default PopUp