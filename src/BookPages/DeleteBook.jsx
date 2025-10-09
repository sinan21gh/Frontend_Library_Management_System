import {useState} from "react";
import axios from "axios";
import Heading from "../Heading.jsx";

function DeleteBook(){
    const [message, setMessage] = useState("");
    const [isbn, setIsbn] = useState();

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
    return(

        <div>
            <Heading heading="Delete Book"/>
            {/*<header>
                <h1>Delete</h1>
            </header>
            <main>
                <input type="text" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)}/>
                <button onClick={deleted}>Submit</button>
                <p>{message}</p>
            </main>*/}

        </div>
    )
}
export default DeleteBook