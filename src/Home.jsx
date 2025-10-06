import {useEffect, useState} from "react";
import axios from "axios";
import userIcon from './assets/user-icon.jpg';
import useIcon from './assets/search.png';

import {useNavigate} from "react-router-dom";
import Dropdown from "./Dropdown.jsx";

function Home(){
    const [books, setBooks] = useState([]);
    const [isbn, setIsbn] = useState("");
    const [book, setBook] = useState(null);


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

    const handleFetch = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await axios.get(`http://localhost:8080/books/${isbn}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setBook(res.data);
            setBooks(null);
            console.log(res);
        } catch (err) {
            console.error(err);
        }

    };


    function GoTo(){
        navigate(`/profile`);
    }

    return (

        <>
            <div className="body1">
                <h2 style={{color:"white"}} className="n1">All Books</h2>
                <div className="i22">
                    <img className="image2" src={userIcon} alt="User pfp" onClick={GoTo}/>
                </div>

                <Dropdown/>

                <div className="searching">
                    <main>
                        <section>
                            <div id="loi">
                                <input
                                    className="s11"
                                    type="text"
                                    placeholder="Enter ISBN"
                                    value={isbn}
                                    onChange={(e) => setIsbn(e.target.value)}/>
                                <img id="s21" onClick={handleFetch} src={useIcon}/>
                            </div>
                        </section>
                    </main>


                    {book && (
                        <div className="singleBook">
                            <h2>Title: {book.title}
                                <br/>
                                <br/>
                                <br/>
                                Author: {book?.authorid?.name}
                            </h2>
                            {book.imageBase64 && (
                                <img
                                    src={`data:image/jpeg;base64,${book.imageBase64}`}
                                    alt={book.title}
                                    width="200"
                                />
                            )}
                            <div className="text-column">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur dolorem doloremque eius impedit in labore laboriosam modi nam nesciunt nobis omnis quae, quam ratione sequi veniam. Corporis, quis.</p>
                            </div>
                        </div>
                    )}
                </div>

                {books && (
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
                )}

            </div>



        </>

    )
}
export default Home