// src/components/AuthorList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "../Dropdown.jsx";
import userIcon from "../assets/user-icon.jpg";
import {useNavigate} from "react-router-dom";
import useIcon from "../assets/search.png";
import librarypfp from "../assets/librarypfp.jpg";


function AuthorList() {
    const [authors, setAuthors] = useState([]);
    const [authorid, setAuthorid] = useState("");
    const [author, setAuthor] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/author", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }

        })
            .then(response => {
                setAuthors(response.data);
                setAuthor(null);
            })
            .catch(error => {
                console.error("Error fetching authors:", error);
            });
    }, []);

    const fetchAuthor = () => {
        axios.get(`http://localhost:8080/about/${authorid}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
            .then(response => {
                setAuthor(response.data);
                setError(null);
                setAuthors(null);
            })
            .catch(err => {
                console.error("Error fetching author:", err);
                setAuthor(null);
                setError("Author not found");
            });
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
                <img src={librarypfp} onClick={goto} width="40px" style={{float:"left", cursor:"pointer", marginLeft:"10px"}} title="About Us"/>

                <h1 style={{color:"white"}}>Find Author by ID</h1>
            </header>

            <nav>


                <Dropdown/>
            </nav>

            <div className="searching">
                <main>
                    <section>
                        <div id="loi">
                            <input
                                type="number"
                                placeholder="Enter author ID"
                                value={authorid}
                                onChange={(e) => setAuthorid(e.target.value)}
                                className="s11"
                            />
                            <img id="s21" onClick={fetchAuthor} src={useIcon}/>
                        </div>
                    </section>
                </main>
            </div>

            {error && <p>{error}</p>}

            {author && (
                <div className="cards" style={{marginLeft:"40%"}}>
                    <img id="image4" src={userIcon} alt="User Profile" onClick={GoTo} title="User Profile" width="50"/>

                    <p style={{color:"white"}}><strong>ID:</strong> {author.authorid}</p>
                    <p style={{color:"white"}}><strong>Name:</strong> {author.name}</p>
                </div>
            )}

            {authors && (
                <div id="oneofff">
                    <ul>
                        {authors.map((author, index) => (
                            <li key={index} className="cards">
                                <p>Author ID: {author.authorid}</p>
                                <p>Author Name: {author.name}</p>
                                <p>Author Age: {author.age}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    );
}
export default AuthorList
