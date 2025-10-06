// src/components/AuthorList.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "../Dropdown.jsx";
import userIcon from "../assets/user-icon.jpg";
import {useNavigate} from "react-router-dom";

function AuthorList() {
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/author", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }

        })
            .then(response => {
                setAuthors(response.data);
            })
            .catch(error => {
                console.error("Error fetching authors:", error);
            });
    }, []);

    function GoTo(){
        navigate(`/profile`);
    }

    return (
        <>
            <h2 className="n1">Author List</h2>
            <img className="image2" src={userIcon} alt="User pfp" onClick={GoTo} title="Profile"/>

            <Dropdown/>

            <div id="oneofff">
                <ul>
                    {authors.map((author, index) => (
                        <li key={index} className="cardss">
                            <p>Author ID: {author.authorid}</p>
                            <p>Author Name: {author.name}</p>
                            <p>Author Age: {author.age}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default AuthorList
