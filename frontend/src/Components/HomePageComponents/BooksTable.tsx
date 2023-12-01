import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { Book } from "../../Pages/Home";
import BookModal from "./BookModal";
type BooksCardProps = {
  books: Book[];
};
const BooksTable: React.FC<BooksCardProps> = ({ books }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [onModalOpen, setOnModalOpen] = useState<Book>({
    _id: "",
    title: "",
    author: "",
    publishYear: 0,
  });
  const onModalOpenHandler = (id: string): Book => {
    const [book] = books.filter((book) => book._id == id); // Use array destructuring
    setOnModalOpen(book);
    return book;
  };

  return (
    <>
      <table className="w-full border-separate border-spacing-2">
        <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
          <tr>
            <th className="px-6 py-2">No</th>
            <th className="px-6 py-2">Title</th>
            <th className="px-6 py-2 max-md:hidden">Author</th>
            <th className="px-6 py-2 max-md:hidden">Publish Year</th>
            <th className="px-6 py-2 ">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="h-8">
              <td className="border-b-2 border-neutral-500 text-center">
                {index + 1}
              </td>
              <td className="border-b-2 border-neutral-500 text-center">
                {book.title}
              </td>
              <td className="border-b-2 border-neutral-500 text-center max-md:hidden">
                {book.author}
              </td>
              <td className="border-b-2 border-neutral-500 text-center max-md:hidden">
                {book.publishYear}
              </td>
              <td className="border-b-2 border-neutral-500 text-center">
                <div className="flex justify-center gap-x-4">
                  {/* <Link to={`/books/details/${book._id}`}> */}
                  <BsInfoCircle
                    className="text-2xl text-green-800 cursor-pointer"
                    onClick={() => {
                      setShowModal(true);
                      onModalOpenHandler(book._id);
                    }}
                  />
                  {/* </Link> */}
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {showModal && (
          <BookModal book={onModalOpen} onClose={() => setShowModal(false)} />
        )}
      </div>
    </>
  );
};

export default BooksTable;
