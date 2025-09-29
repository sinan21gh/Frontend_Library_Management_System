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

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /><br/>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder="Email"
                    value={emial}
                    onChange={(e) => setEmail(e.target.value)}
                /><br/>
                <button type="submit">Register</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default Register;
