import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import { addBook } from '../redux/books/books';

const NewBook = () => {
  const [bookTitle, setTitle] = useState('');
  const [bookAuthor, setAuthor] = useState('');
  const [bookCategory, setCategory] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const dispatch = useDispatch();

  const submitToStore = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      author: bookAuthor,
      title: bookTitle,
      category: bookCategory,
    };

    dispatch(addBook(newBook));
    setAuthor('');
    setTitle('');
    setCategory('');
  };

  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitToStore} className="add-book">
        <input
          name="title"
          className="title-input"
          placeholder="Book title"
          value={bookTitle}
          onChange={handleTitleChange}
        />
        <input
          name="author"
          className="author-input"
          placeholder="Book author"
          value={bookAuthor}
          onChange={handleAuthorChange}
        />
        <select
          className="categories"
          name="category"
          id="categories"
          value={bookCategory}
          onChange={handleCategoryChange}
        >
          <option defaultValue="">Category</option>
          <option value="action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <input className="add-button" type="submit" value="ADD BOOK" />
      </form>
    </>
  );
};

export default NewBook;
