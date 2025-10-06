import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import PostAuthor from "./AuthorPages/PostAuthor.jsx";
import UploadBook from "./BookPages/UploadBook.jsx";
import GetBook from "./BookPages/GetBook.jsx";
import GetAllBooks from "./BookPages/GetAllBooks.jsx";
import Profile from "./Profile.jsx";
import Register from "./Register.jsx";
import Home from "./Home.jsx";
import LogOut from "./LogOut.jsx";
import PutBook from "./BookPages/PutBook.jsx";
import AuthorList from "./AuthorPages/AuthorList.jsx";
import AuthorSearchOneDetails from "./AuthorPages/AuthorSearchOneDetails.jsx";


function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Register/>} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/books" element={<Home />} />
                  <Route path="/profile" element={<Profile/>}></Route>
                  <Route path="/logout" element={<LogOut/>}></Route>
                  <Route path="/book" element={<UploadBook />} />
                  <Route path="/getBook" element={<GetBook/>}></Route>
                  <Route path="/updateBook" element={<PutBook/>}></Route>
                  <Route path="/createAuthor" element={<PostAuthor/>}></Route>
                  <Route path="/getAllAuthors" element={<AuthorList/>}></Route>
                  <Route path="/getAuthor" element={<AuthorSearchOneDetails/>}></Route>



              </Routes>
          </BrowserRouter>





          {/*<GetAllBooks/>*/}
          {/*<GetBook/>*/}
      {/*<UploadBook/>*/}

          {/*<BrowserRouter>
              <Routes>
                  <Route path="/" element={<UserRegister/>}></Route>
                  <Route path="/login" element={<UserLogin/>}></Route>
                  <Route path="/profile" element={<UserProfile/>}></Route>
                  <Route path="/update" element={<PartialUpdateUser/>}></Route>
                  <Route path="/delete" element={<DeleteUser/>}></Route>
                  <Route path="/product" element={<CreateProductPost/>}></Route>

              </Routes>
          </BrowserRouter>*/}

      </>
  );
}

export default App;


























/*
import AuthorSearchOneDetails from "./AuthorSearchOneDetails.jsx";
import PostAuthor from "./PostAuthor.jsx";
import PutAuthors from "./PutAuthors.jsx";
import PatchAuthor from "./PatchAuthor.jsx";
import DeleteAuthor from "./DeleteAuthor.jsx";
import PutBook from "./PutBook.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";

function App() {
  return (
      <>
        <Register/>
        <Login/>
      </>

      // <PutBook/>

      // <DeleteAuthor/>

/!*
      <PatchAuthor/>
*!/

      // <PutAuthors/>

      // <PostAuthor/>

/!*
    <AuthorSearchOneDetails/>
*!/
  )
}

export default App
*/
