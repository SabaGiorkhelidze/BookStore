import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineFileAdd } from "react-icons/ai";
import BooksTable from "../Components/HomePageComponents/BooksTable";

export type Book = {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
};

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  console.log(books);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <AiOutlineFileAdd className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? <Spinner /> : <BooksTable books={books} />}
    </div>
  );
};

export default Home;
