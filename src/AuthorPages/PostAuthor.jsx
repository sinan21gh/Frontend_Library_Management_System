
import { useState } from "react";
import axios from "axios";

function PostAuthor() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/about", {
                name: name,
                age: age
            });
            setMessage(`Author created: ${response.data.name} (ID: ${response.data.authorid})`);
            setName("");
            setAge("");
        } catch (err) {
            console.error("Error creating author:", err);
            setMessage("Error creating author");
        }
    };

    return (
        <div>
            <h1>Add Author</h1>
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

            {message && <p>{message}</p>}
        </div>
    );
}
export default PostAuthor
