import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8080/login", {
                username: username,
                password: password
            });

            localStorage.setItem("token", res.data);
            setMessage("Login successful!");
            console.log(res);

            setTimeout(() => {
                navigate("/book")
            }, 3000)

        } catch (err) {
            setMessage("Invalid username or password");
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <p>{message}</p>
        </form>
    );
}

export default Login;
