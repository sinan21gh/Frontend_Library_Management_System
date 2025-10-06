import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [emial, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://localhost:8080/register", {
                username: username,
                password: password,
                email: emial
            });
            setMessage("User registered successfully!");

            navigate("/login");
        } catch (err) {
            console.error(err);
            setMessage("Registration failed.");
        }
    };

    function GoToLogin(){
        navigate("/login");
    }

    return (

            <div className="body1">
                <div className="forms">
                    <h1 style={{color:"white"}}>Register</h1>
                    <form onSubmit={handleRegister}>
                        <input
                            className="i1"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        /><br/>
                        <input
                            className="i2"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        /><br/>
                        <input
                            className="i3"
                            type="email"
                            placeholder="Email"
                            value={emial}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        /><br/>
                        <button type="submit">Register</button>
                    </form>
                    <p style={{color:"white"}}>{message}</p>
                </div>
                <p className="loginmes">Already Have An Account?</p>
                <button className="f1" onClick={GoToLogin}>Go To Login</button>
            </div>


    );
}

export default Register;
