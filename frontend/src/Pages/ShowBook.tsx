import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Spinner";
import BackButton from "../Components/BackButton";
import axios from "axios";

type bookType = {
  _id: string;
  title: string;
  author: string;
  publishYear: number;
  createdAt: Date;
  updatedAt: Date;
};
const ShowBook = () => {
  const [book, setBook] = useState<bookType>({});
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams<string>();

  const formattedDate = (bookDate: Date) =>
    new Date(bookDate).toLocaleString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  
    useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full flex justify-around flex-row">
          <div className="flex flex-col justify-start border-2 border-sky-400 rounded-xl w-fit pl-4 pr-24">
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Id</span>
              <span>{book._id}</span>
            </div>
            <div className="flex flex-row justify-start">
              <div className="my-4">
                <span className=" mr-4 text-gray-500">Book</span>
                <span>
                  {book.title} - {book.author}
                </span>
              </div>
              {/* {/* <div className="my-4 mx-5">
                <span className="text-xl mr-4 text-gray-500">Author</span>
                <span className=""></span> 
              </div> */}
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Publish Year</span>
              <span>{book.publishYear}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Created Date</span>
              <span>{formattedDate(book.createdAt)}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Last Update</span>
              <span>{formattedDate(book.updatedAt)}</span>
            </div>
          </div>
          <div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
