import React, { useState } from "react";
import axios from "axios";
import Heading from "../Heading.jsx";
import Footer from "../Footer.jsx";

const delay = 300;


function DeleteAuthor() {
    const [id, setId] = useState("");
    const [visibleId, setVisibleId] = useState(null);


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

    const d = (answerId) => {
        try{
            // clearTimeout(window.transitionTimeout);

            if(visibleId === answerId){
                setVisibleId(null);
                return;
            }

            setVisibleId(null);

            setTimeout(() => {
                setVisibleId(answerId);
            },delay);
        }
        catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <heading style={{height:"200px"}}>
                <Heading heading="Delete Author"/>
            </heading>

            <main>
                <div style={{marginTop:"9.8%"}}></div>
                <br/>
                <br/>
                <br/>

                <div className="questions">
                    <ul className="aboutus">
                        <li>
                            <button onClick={() => d('a1')}>What is this page used for?</button>
                            <div id="a1" className={visibleId === 'a1' ? 'answer show' : 'answer'}>This page is used so users can delete their author!</div>
                        </li>
                        <hr style={{width:"50%", marginLeft:"26.3%"}}/>
                        <li>
                            <button onClick={() => d('a2')}>Why should i delete my author?</button>
                            <div id="a2" className={visibleId === 'a2' ? 'answer show' : 'answer'}>You should delete your author if you no longer want it.</div>
                        </li>
                        <hr style={{width:"50%", marginLeft:"26.3%"}}/>
                        <li>
                            <button onClick={() => d('a3')}>Is it free to delete my author?</button>
                            <div id="a3" className={visibleId === 'a3' ? 'answer show' : 'answer'}>It is completely free!</div>
                        </li>
                        <hr style={{width:"50%", marginLeft:"26.3%"}}/>

                    </ul>
                </div>



                <div className="db1">
                    <h2 style={{textAlign:"center"}}>Delete Author here</h2>
                    <input type="text"
                           placeholder="Author ID"
                           value={id}
                           onChange={(e) => setId(e.target.value)}/>
                    <button onClick={handleDelete}>Delete Author</button>
                </div>

            </main>

            <Footer/>

        </div>

    );
}

export default DeleteAuthor;
