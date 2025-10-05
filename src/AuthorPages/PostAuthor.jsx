
import { useState } from "react";
import axios from "axios";
import Dropdown from "../Dropdown.jsx";
import userIcon from "../assets/user-icon.jpg";
import {useNavigate} from "react-router-dom";

function PostAuthor() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");
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
            setMessage(null);
        }
    };

    function GoTo(){
        navigate(`/profile`);
    }

    return (
        <div>
            <header style={{textAlign:"center"}}>
                <h1>Add Author</h1>
            </header>

            <nav>
                <Dropdown/>

                <img className="image2" src={userIcon} alt="User pfp" onClick={GoTo} title="Profile"/>

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
                {!message && <p id="pl">Error creating author</p>}
            </main>

        </div>
    );
}
export default PostAuthor
