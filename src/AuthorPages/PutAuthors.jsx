import React, { useState } from "react";
import axios from "axios";

function PutAuthors(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [id, setId] = useState("");

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/about/${id}`, {
                name: name,
                age: parseInt(age)
            });
            console.log("Author updated:", response.data);
            alert("Author updated successfully!");
        } catch (error) {
            console.error("Error updating author:", error);
            alert("Update failed. Check console.");
        }
    };

    return (
        <div>
            <h2>Update Author</h2>
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
        </div>
    );
};

export default PutAuthors;
