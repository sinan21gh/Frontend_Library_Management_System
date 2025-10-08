import {useState} from "react";
import axios from "axios";
import Dropdown from "../Dropdown.jsx";
import {useNavigate} from "react-router-dom";
import userIcon from "../assets/user-icon.jpg";

function PutBook(){
    const [isbn, setISBN] = useState("");
    const [title, setTitle] = useState("");
    const [authorID, setAuthorID] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();


    const handlePut = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.put(`http://localhost:8080/book/${isbn}`, {
                title: title,
                authorid: {
                    authorid: authorID,
                    name: name,
                    age: parseInt(age)
                }
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            });

            if(response.status === 200){
                setMessage("Successfully Updated")
            }
            else if (response.status === 201){
                setMessage("Successfully Created")
            }

            setISBN("");
            setTitle("");
            setAuthorID("");
            setName("");
            setAge("");
        }
        catch (e) {
            setMessage(`${authorID} not found`);
            console.log(e);
        }
    }

    function GoTo(){
        navigate(`/profile`);
    }

    return (
        <>
            <div className="body3">
                <header style={{textAlign:"center"}}>
                    <h1 style={{color:"white"}}>Create/Update book</h1>
                </header>

                <nav style={{marginBottom:"100px"}}>
                    <div className="i22">
                        <img className="image2" src={userIcon} alt="User pfp" onClick={GoTo}/>
                    </div>
                    <Dropdown/>


                </nav>

                <main className="puttingbooks">
                    <form onSubmit={handlePut}>
                        <input type="text" placeholder="ISBN" value={isbn} onChange={(e) => setISBN(e.target.value)}
                        />

                        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}
                        />

                        <input type="number" placeholder="Author ID" value={authorID} onChange={(e) => setAuthorID(e.target.value)}
                        />

                        <input type="text" placeholder="Author Name" value={name} onChange={(e) => setName(e.target.value)}
                        />

                        <input type="number" placeholder="Author Age" value={age} onChange={(e) => setAge(e.target.value)}
                        />

                        <button type="submit">Submit</button>

                    </form>

                    {message && <p>{message}</p>}
                </main>
            </div>
        </>
    )
}
export default PutBook