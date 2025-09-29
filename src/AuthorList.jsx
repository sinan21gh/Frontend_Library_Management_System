// src/components/AuthorList.jsx
import { useEffect, useState } from "react";
import axios from "axios";

function AuthorList() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/author")
            .then(response => {
                setAuthors(response.data);
            })
            .catch(error => {
                console.error("Error fetching authors:", error);
            });
    }, []);

    return (
        <div>
            <h1>Author List</h1>
            <ul>
                {authors.map((author, index) => (
                    <li key={index}>
                        {author.name ?? "Unknown Author"}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default AuthorList
