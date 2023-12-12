import { useState, useEffect } from "react";
import BackButton from "../Components/BackButton";
import Spinner from "../Components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const CreateBook = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [publishYear, setPublishYear] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const buttonVariants = {
    hover: {
      color: "white",
      backgroundColor: "rgb(40, 41, 43)",
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleSaveBook = () => {
    const data: object = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post(`http://localhost:5555/books`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 text-center">Create Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col justify-center   rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label htmlFor="" className="mr-4 text-gray-500 text-xl">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label htmlFor="" className="mr-4 text-gray-500 text-xl">
              Author
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label htmlFor="" className="mr-4 text-gray-500 text-xl">
              Publish Year
            </label>
            <input
              type="number"
              value={publishYear}
              onChange={(e) => {
                setPublishYear(e.target.value);
              }}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>

          <motion.button
            className="py-2 bg-gray-500 my-8 rounded-lg"
            onClick={handleSaveBook}
            variants={buttonVariants}
            whileHover="hover"
          >
            Save
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default CreateBook;
