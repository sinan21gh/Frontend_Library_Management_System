import React, { useState } from "react";
import axios from "axios";
import userIcon from "../assets/user-icon.jpg";
import librarypfp from "../assets/librarypfp.jpg";

import Dropdown from "../Dropdown.jsx";
import {useNavigate} from "react-router-dom";

function PutAuthors(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/about/${id}`, {
                name: name,
                age: parseInt(age)
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }}
            );
            console.log("Author updated:", response.data);
            alert("Author updated successfully!");
        } catch (error) {
            console.error("Error updating author:", error);
            alert("Update failed. Check console.");
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
                <img src={librarypfp} onClick={goto} width="40px" height="40" style={{float:"left", cursor:"pointer", marginLeft:"10px"}} title="About Us"/>
                <h1 style={{color:"white"}}>Update Author</h1>
            </header>

            <nav>

                <Dropdown/>
            </nav>

            <main className="form-container">
                <input
                    type="text"
                    placeholder="Author ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    placeholder="Author Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input
                    type="number"
                    placeholder="Author Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <br />
                <button onClick={handleUpdate}>Update Author</button>
            </main>


        </div>
    );
};

export default PutAuthors;
