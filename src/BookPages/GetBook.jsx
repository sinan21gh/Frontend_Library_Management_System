import {useState} from "react";
import axios from "axios";
import AuthorSearchOneDetails from "../AuthorPages/AuthorSearchOneDetails.jsx";

function GetBook() {
    const [isbn, setIsbn] = useState("");
    const [book, setBook] = useState(null);



    const handleFetch = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/books/${isbn}`);
            setBook(res.data);

        } catch (err) {
            console.error(err);
        }

    };


    return (
        <>
            <input
                type="text"
                placeholder="Enter ISBN"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
            />
            <button onClick={handleFetch}>Fetch Book</button>

            {book && (
                <div>
                    <h2>{book.title}</h2>
                    <p>Author: {book?.authorid?.name}</p>
                    {book.imageBase64 && (
                        <img
                            src={`data:image/jpeg;base64,${book.imageBase64}`}
                            alt={book.title}
                            width="200"
                        />
                    )}
                </div>
            )}
        </>
    );
}

export default GetBook;
