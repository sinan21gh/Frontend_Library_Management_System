import React, { useState } from "react";
import axios from "axios";

function DeleteAuthor() {
    const [id, setId] = useState("");

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/about/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            });
            if (response.status === 204) {
                alert(`Author with ID ${id} deleted successfully!`);
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                alert("Author not found!");
            } else {
                console.error("Error deleting author:", error);
                alert("Delete failed.");
            }
        }
    };

    return (
        <div>
            <h2>Delete Author</h2>
            <input
                type="text"
                placeholder="Author ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <br />
            <button onClick={handleDelete}>Delete Author</button>
        </div>
    );
};

export default DeleteAuthor;
