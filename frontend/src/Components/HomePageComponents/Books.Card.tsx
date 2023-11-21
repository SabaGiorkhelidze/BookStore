import React from 'react';
import BookSingleCard from './BookSingleCard';
import { Book } from '../../Pages/Home';

type BooksCardProps = {
  books: Book[];
};

const BooksCard: React.FC<BooksCardProps> = ({ books }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default BooksCard;
