import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import pullBooks from './Slice';

const Store = () => {
  const bookStore = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pullBooks());
  }, []);

  let storeFetch = useSelector((store) => store.booksReducer.books);
  if (storeFetch.error) {
    storeFetch = [];
  } else {
    const bookIDs = Object.keys(storeFetch);
    bookIDs.forEach((id) => {
      storeFetch[id].map((book) => (
        bookStore.push(
          <Book
            key={id}
            id={id}
            title={book.title}
            category={book.category}
          />,
        )
      ));
    });
  }

  return (
    <>
      { bookStore }
    </>
  );
};

export default Store;
