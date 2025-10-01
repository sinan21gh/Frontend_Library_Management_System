import {useEffect, useState} from "react";
import axios from "axios";
import userIcon from './assets/user-icon.jpg';
import {useNavigate} from "react-router-dom";

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
        navigate("/profile");
    }

    return (

        <>
            <h2 id="n1">All Books</h2>
            <img id="image2" src={userIcon} alt="sorry" onClick={GoTo}/>

            <div className="container">
                <button>☰</button>
                <div className="dropdown">
                    <ul>
                        <li onClick={GoTo}>Login</li>
                        <li onClick={GoTo}>Profile</li>
                        <li onClick={GoTo}>Register</li>
                        <li onClick={GoTo}>Upload Book</li>
                    </ul>
                </div>
            </div>

            <div id="oneoff">
                <div>
                    {books.map((book) => (
                        <div key={book.isbn} className="cards">
                            <h3>{book.title}</h3>
                            <img id="image1" src={userIcon} alt="sorry" onClick={GoTo}/>

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