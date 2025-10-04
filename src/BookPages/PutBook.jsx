import {useState} from "react";
import axios from "axios";

function PutBook(){
    const [isbn, setISBN] = useState("");
    const [title, setTitle] = useState("");
    const [authorID, setAuthorID] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");

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

    return (
        <>
        <h1>Create/Update book</h1>

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

            {message && <p>${message}</p>}


        </>
    )
}
export default PutBook