import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import pullBooks from './Slice';

import { addBook } from '../redux/books/books';

const NewBook = () => {
  const [bookTitle, setTitle] = useState('');
  const [bookCategory, setCategory] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const dispatch = useDispatch();

  const submitToStore = async (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      title: bookTitle,
      category: bookCategory,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
    await dispatch(pullBooks());
    document.location.reload(true);
  };

  return (
    <div className="new-book-container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitToStore} className="add-book">
        <input
          name="title"
          className="title-input"
          placeholder="Book title"
          value={bookTitle}
          onChange={handleTitleChange}
        />
        <select
          className="categories main-font"
          name="category"
          id="categories"
          value={bookCategory}
          onChange={handleCategoryChange}
        >
          <option defaultValue="">Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <input className="add-button" type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default NewBook;
