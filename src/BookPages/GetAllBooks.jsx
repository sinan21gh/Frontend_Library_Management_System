import { useEffect, useState } from "react";
import axios from "axios";

function GetAllBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8080/books");
                setBooks(res.data.content);
            } catch (err) {
                console.error(err);
            }
        };
        fetchBooks();
    }, []);

    return (
        <div>
            <h2>All Books</h2>
            {books.map((book) => (
                <div key={book.isbn}>
                    <h3>{book.title}</h3>
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
    );
}

export default GetAllBooks;
