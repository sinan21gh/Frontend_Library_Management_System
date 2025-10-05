import React, { useState } from "react";
import axios from "axios";

function PatchAuthor() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handlePatch = async () => {
        try {

            const body = {};
            if (name) body.name = name;
            if (age) body.age = parseInt(age);

            const response = await axios.patch(`http://localhost:8080/about/${id}`, body, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }

            });
            console.log("Patched:", response.data);
            alert("Author partially updated!");
        } catch (error) {
            console.error("Patch failed:", error);
        }
    };

    return (
        <div>
            <h2>Patch Author</h2>
            <input
                type="text"
                placeholder="Author ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="New Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                type="number"
                placeholder="New Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <br />
            <button onClick={handlePatch}>Patch Author</button>
        </div>
    );
}

export default PatchAuthor;
