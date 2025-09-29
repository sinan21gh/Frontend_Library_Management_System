import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function UploadBook() {
    const [isbn, setIsbn] = useState("");
    const [title, setTitle] = useState("");
    const [authorId, setAuthorId] = useState("");
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("isbn", isbn);
        formData.append("title", title);
        formData.append("authorid", authorId);
        formData.append("image", file);

        try {
            const token = localStorage.getItem("token");
            const res = await axios.post("http://localhost:8080/book", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setMessage("Book uploaded successfully!");
        } catch (err) {
            console.error(err);
            setMessage("Upload failed.");
        }

    };

    function goTo(){
        navigate("/books");
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="number" placeholder="Author ID" value={authorId} onChange={(e) => setAuthorId(e.target.value)} />
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button type="submit">Upload Book</button>
            <p>{message}</p>
        </form>

        <button onClick={goTo}>go to</button>
            </>
    );
}

export default UploadBook;
