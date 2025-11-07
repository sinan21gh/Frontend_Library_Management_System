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
                navigate("/books")
            }, 3000)

        } catch (err) {
            setMessage("Invalid username or password");
            console.error(err);
        }
    };

    function GoToLogin(){
        navigate("/");
    }

    function GoToAbout(){
        navigate("/about");
    }

    return (
        // <div className="body1">
        <div className="body1">
            <button style={{marginLeft:"100px", marginTop:"20px", color:"white", background:"none", border:"none", cursor:"pointer", fontSize:"2em"} }
                    onClick={GoToAbout} title="About Us">Library4u</button>
            <div className="forms">
                <h1 style={{color:"white"}}>Login Page</h1>
                <form onSubmit={handleLogin} >
                    <input
                        className="form-input"
                        type="text"
                        placeholder="Username"
                        value={username}

                        onChange={(e) => setUsername(e.target.value)}
                        required
                    /><br/>
                    <input
                        className="form-input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /><br/>
                    <button type="submit">Login</button>
                    <p style={{color:"white"}}>{message}</p>
                </form>
            </div>
            <p className="loginmes">Don't Have An Account?</p>
            <button className="f1" onClick={GoToLogin}>Sign Up Here</button>
        </div>
    );
}

export default Login;
