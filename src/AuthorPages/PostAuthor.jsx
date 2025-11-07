
import React, { useState } from "react";
import axios from "axios";
import Dropdown from "../Dropdown.jsx";
import userIcon from "../assets/user-icon.jpg";
import {useNavigate} from "react-router-dom";
import librarypfp from "../assets/librarypfp.jpg";

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

    function goto(){
        navigate(`/about`);
    }

    return (
        <div className="page-container">
        <header style={{textAlign:"center"}}>
                <img src={librarypfp} onClick={goto} width="40px" style={{float:"left", cursor:"pointer", marginLeft:"10px"}} title="About Us"/>
                <h1 style={{color:"white"}}>Add Author</h1>
            </header>

            <nav>

                <Dropdown/>


            </nav>

            <main className="form-container">
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
