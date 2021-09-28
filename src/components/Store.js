import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Books';

const Store = () => {
  const bookStore = useSelector((store) => store.booksReducer);
  const bookComponent = bookStore.map(
    (book) => (
      <Book
        key={book.id}
        id={book.id}
        author={book.author}
        title={book.title}
        category={book.category}
      />
    ),
  );

  return (
    <>
      { bookComponent }
    </>
  );
};

export default Store;
