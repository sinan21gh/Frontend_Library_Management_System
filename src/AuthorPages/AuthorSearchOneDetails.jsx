import { useState } from "react";
import axios from "axios";

export default function AuthorSearchOneDetails() {
    const [authorid, setAuthorid] = useState("");
    const [author, setAuthor] = useState(null);
    const [error, setError] = useState(null);

    const fetchAuthor = () => {
        axios.get(`http://localhost:8080/about/${authorid}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
            .then(response => {
                setAuthor(response.data);
                setError(null);
            })
            .catch(err => {
                console.error("Error fetching author:", err);
                setAuthor(null);
                setError("Author not found");
            });
    };

    return (
        <div>
            <h1>Find Author by ID</h1>

            <div>
                <input
                    type="number"
                    placeholder="Enter author ID"
                    value={authorid}
                    onChange={(e) => setAuthorid(e.target.value)}
                    className="border p-2 rounded"
                />
                <button onClick={fetchAuthor}>Search</button>
            </div>

            {error && <p>{error}</p>}

            {author && (
                <div>
                    <p><strong>ID:</strong> {author.authorid}</p>
                    <p><strong>Name:</strong> {author.name}</p>
                </div>
            )}
        </div>
    );
}