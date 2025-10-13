import {useState} from "react";
import axios from "axios";
import Heading from "../Heading.jsx";
import Footer from "../Footer.jsx";

const delay = 300;


function DeleteBook(){
    const [message, setMessage] = useState("");
    const [isbn, setIsbn] = useState();
    const [visibleId, setVisibleId] = useState(null);


    const deleted = async () => {
        try{
            const token = localStorage.getItem("token");
            const res = await axios.delete(`http://localhost:8080/books/${isbn}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (res.status === 204){
                setMessage("Successfully deleted");
            }
            if (res.status === 404){
                setMessage("Book wasnt found");
            }
        }
        catch (e) {
            console.log(e);
            setMessage("Error Occurred");
        }
    }

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

    return(

        <div>
            <heading style={{height:"200px"}}>
                <Heading heading="Delete Book"/>
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
                            <div id="a1" className={visibleId === 'a1' ? 'answer show' : 'answer'}>This page is used so users can delete books!</div>
                        </li>
                        <hr style={{width:"50%", marginLeft:"26.3%"}}/>
                        <li>
                            <button onClick={() => d('a2')}>Why should i delete a book?</button>
                            <div id="a2" className={visibleId === 'a2' ? 'answer show' : 'answer'}>You should delete a book if you no loner want it.</div>
                        </li>
                        <hr style={{width:"50%", marginLeft:"26.3%"}}/>
                        <li>
                            <button onClick={() => d('a3')}>Is it free to delete a book?</button>
                            <div id="a3" className={visibleId === 'a3' ? 'answer show' : 'answer'}>It is completely free!</div>
                        </li>
                        <hr style={{width:"50%", marginLeft:"26.3%"}}/>

                    </ul>
                </div>



                <div className="db1">
                    <h2 style={{textAlign:"center"}}>Delete A book here</h2>
                    <input type="text" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)}/>
                    <button onClick={deleted}>Submit</button>
                    <p>{message}</p>
                </div>

            </main>

            <Footer/>

        </div>
    )
}
export default DeleteBook