import {useEffect, useState} from "react";
import axios from "axios";

function Home(){
    const [books, setBooks] = useState([]);

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




    //Ialwayswinnowauthor
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

    )
}
export default Home