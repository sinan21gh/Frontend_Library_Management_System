import { useState } from "react";
import axios from "axios";
import Dropdown from "../Dropdown.jsx";
import userIcon from "../assets/user-icon.jpg";
import {useNavigate} from "react-router-dom";

import useIcon from "../assets/search.png";

export default function AuthorSearchOneDetails() {
    const [authorid, setAuthorid] = useState("");
    const [author, setAuthor] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();


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

    function GoTo(){
        navigate(`/profile`);
    }

    return (
        <>

        {/*<div className="searchingg">*/}
            <header style={{textAlign:"center"}}>
                <h1>Find Author by ID</h1>
            </header>

            <nav>
                <img className="image2" src={userIcon} alt="User pfp" onClick={GoTo}/>
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


                {/*<main>
                <section>
                    <input
                        type="number"
                        placeholder="Enter author ID"
                        value={authorid}
                        onChange={(e) => setAuthorid(e.target.value)}
                        className="border p-2 rounded"
                    />
                    <button onClick={fetchAuthor}>Search</button>
                </section>
            </main>*/}


            {error && <p>{error}</p>}

            {author && (
                <div className="authorget">
                    <img id="image1" src={userIcon} alt="User Profile" onClick={GoTo} title="User Profile"/>

                    <p><strong>ID:</strong> {author.authorid}</p>
                    <p><strong>Name:</strong> {author.name}</p>
                </div>
            )}
        {/*</div>*/}
        </>
    );
}