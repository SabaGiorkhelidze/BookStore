import { Routes, Route } from "react-router-dom";
import CreateBook from "./Pages/CreateBook";
import ShowBook from "./Pages/ShowBook";
import EditBook from "./Pages/EditBook";
import Home from "./Pages/Home";
import DeleteBook from "./Pages/DeleteBook";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books/create" element={<CreateBook />}></Route>
        <Route path="/books/details/:id" element={<ShowBook />}></Route>
        <Route path="/books/edit/:id" element={<EditBook />}></Route>
        <Route path="/books/delete/:id" element={<DeleteBook />}></Route>
      </Routes>
    </>
  );
}

export default App;
