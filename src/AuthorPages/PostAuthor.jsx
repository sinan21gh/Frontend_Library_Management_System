
import { useState } from "react";
import axios from "axios";
import Dropdown from "../Dropdown.jsx";
import userIcon from "../assets/user-icon.jpg";
import {useNavigate} from "react-router-dom";

function PostAuthor() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/about", {
                name: name,
                age: age
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }

            });
            setMessage(`Author created: ${response.data.name} (ID: ${response.data.authorid})`);
            setName("");
            setAge("");
        } catch (err) {
            console.error("Error creating author:", err);
            setErrorMessage("Error creating author");
        }
    };

    function GoTo(){
        navigate(`/profile`);
    }

    return (
        <div className="body4">
            <header style={{textAlign:"center"}}>
                <h1 style={{color:"white"}}>Add Author</h1>
            </header>

            <nav>
                <div className="i22">
                    <img className="image2" src={userIcon} alt="User pfp" onClick={GoTo}/>
                </div>
                <Dropdown/>


            </nav>

            <main className="postauthor">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input

                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                    <button type="submit">Save</button>
                </form>

                {message && <p id="po">{message}</p>}
                {errorMessage && <p id="pl">Error creating author</p>}
            </main>

        </div>
    );
}
export default PostAuthor
