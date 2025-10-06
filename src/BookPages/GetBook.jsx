import {useState} from "react";
import axios from "axios";
import AuthorSearchOneDetails from "../AuthorPages/AuthorSearchOneDetails.jsx";
import Dropdown from "../Dropdown.jsx";

function GetBook() {
    const [isbn, setIsbn] = useState("");
    const [book, setBook] = useState(null);



    const handleFetch = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await axios.get(`http://localhost:8080/books/${isbn}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setBook(res.data);
            console.log(res);
        } catch (err) {
            console.error(err);
        }

    };


    return (
        <>
            <div className="searching">
                <header style={{textAlign:"center"}}>
                    <h1>Find Book By ISBN</h1>
                </header>

                <nav>
                    <Dropdown/>
                </nav>

                <main>
                    <section>
                        <input
                            className="s11"
                            type="text"
                            placeholder="Enter ISBN"
                            value={isbn}
                            onChange={(e) => setIsbn(e.target.value)}/>
                        <button id="s21" onClick={handleFetch}>Fetch Book</button>

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
                    </section>



                </main>
            </div>
        </>
    );
}

export default GetBook;
386362