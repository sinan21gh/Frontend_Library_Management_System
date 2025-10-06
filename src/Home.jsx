import {useEffect, useState} from "react";
import axios from "axios";
import userIcon from './assets/user-icon.jpg';
import {useNavigate} from "react-router-dom";
import Dropdown from "./Dropdown.jsx";

function Home(){
    const [books, setBooks] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const getBooks = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await axios.get("http://localhost:8080/books", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                setBooks(response.data);
                console.log(response.data);
            }
            catch (e) {
                console.log(e);
                alert("Cannot display information at this time");
            }
        }
        getBooks();
    }, []);


    function GoTo(){
        navigate(`/profile`);
    }

    return (

        <>
            <h2 className="n1">All Books</h2>
            <img className="image2" src={userIcon} alt="User pfp" onClick={GoTo}/>

            <Dropdown/>

            <div id="oneoff">
                <div>
                    {books.map((book) => (
                        <div key={book.isbn} className="cards">
                            <h3>{book.title}</h3>
                            <img id="image1" src={userIcon} alt="User Profile" onClick={GoTo}/>

                            <p>Author: {book?.authorid?.name}</p>
                            {book.imageBase64 && (
                                <img
                                    src={`data:image/jpeg;base64,${book.imageBase64}`}
                                    alt={book.title}
                                    width="200"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}
export default Home