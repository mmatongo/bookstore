import React from 'react';

const NewBook = () => (
  <>
    <h2>ADD NEW BOOK</h2>
    <div className="add-form">
      <input className="book-title" placeholder="Book title" />
      <select className="categories" name="categories" id="categories">
        <option defaultValue="">Category</option>
        <option value="action">Action</option>
        <option value="science-fiction">Science Fiction</option>
        <option value="economy">Economy</option>
      </select>
      <input className="add-button" type="submit" value="ADD BOOK" />
    </div>
  </>
);

export default NewBook;
