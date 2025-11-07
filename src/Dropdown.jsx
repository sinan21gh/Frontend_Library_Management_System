import {useNavigate} from "react-router-dom";
import userIcon from "./assets/user-icon.jpg";


function Dropdown(){
    const navigate = useNavigate();

    function GoTo(link){
        navigate(`/${link}`);
    }

    return(
        <>
        <div className="container">
            <div className="dropdown">
                <ul>
                    <li onClick={() => GoTo("book")}>Upload Book</li>
                    <li onClick={() => GoTo("books")}>Home</li>
                    <li onClick={() => GoTo("deleteBook")}>Delete a book</li>
                    <li onClick={() => GoTo("updateBook")}>Update Book</li>
                    <li onClick={() => GoTo("createAuthor")}>Create Author</li>
                    <li onClick={() => GoTo("getAllAuthors")}>Find All Authors</li>
                    <li onClick={() => GoTo("putAuthor")}>Full Update Author</li>
                    <li onClick={() => GoTo("deleteAuthor")}>Delete Author</li>
                    <li onClick={() => GoTo("profile")}><img width="50" src={userIcon}></img></li>

                </ul>
            </div>
        </div>


</>
    )
}
export default Dropdown