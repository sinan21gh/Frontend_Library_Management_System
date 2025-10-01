import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Dropdown from "../Dropdown.jsx";
import userIcon from "../assets/user-icon.jpg";

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
        navigate("/profile");
    }

    return (
        <>
            <h2 className="n1">Upload A Book Here</h2>

            <img className="image2" src={userIcon} alt="User pfp" onClick={goTo} title="Your Prfile"/>

            <Dropdown/>

            <div className="t1">
                <form onSubmit={handleSubmit} className="bookupload">
                    <input className="booki1" type="text" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)}  required maxLength="17"/>
                    <input className="booki2" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    <input className="booki3" type="number" placeholder="Author ID" value={authorId} onChange={(e) => setAuthorId(e.target.value)} required />
                    <input className="booki4" type="file" onChange={(e) => setFile(e.target.files[0])} required/>
                    <button className="booki5" type="submit">Upload Book</button>
                    <p>{message}</p>
                </form>
            </div>
            <div className="t2">
                <button className="tb1">ⓘ<p>ISBN should have 17 characters including 4 dashes</p></button>
            </div>
        </>
    );
}

export default UploadBook;
