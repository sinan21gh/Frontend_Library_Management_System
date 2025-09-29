import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import PostAuthor from "./PostAuthor.jsx";
import UploadBook from "./UploadBook.jsx";
import GetBook from "./GetBook.jsx";
import GetAllBooks from "./GetAllBooks.jsx";
import Profile from "./Profile.jsx";
import Register from "./Register.jsx";
import Home from "./Home.jsx";
import UserRegister from "./ecom/UserRegister.jsx";
import UserLogin from "./ecom/UserLogin.jsx";
import UserProfile from "./ecom/UserProfile.jsx";
import PartialUpdateUser from "./ecom/PartialUpdateUser.jsx";
import DeleteUser from "./ecom/DeleteUser.jsx";
import CreateProductPost from "./ecomproducts/CreateProductPost.jsx";

function App() {
  return (
      <>
          {/*<GetAllBooks/>*/}
          {/*<GetBook/>*/}
      {/*<UploadBook/>*/}

          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<UserRegister/>}></Route>
                  <Route path="/login" element={<UserLogin/>}></Route>
                  <Route path="/profile" element={<UserProfile/>}></Route>
                  <Route path="/update" element={<PartialUpdateUser/>}></Route>
                  <Route path="/delete" element={<DeleteUser/>}></Route>
                  <Route path="/product" element={<CreateProductPost/>}></Route>

              </Routes>
          </BrowserRouter>


      {/*<BrowserRouter>
        <Routes>
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/book" element={<UploadBook />} />
            <Route path="/books" element={<Home />} />
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
