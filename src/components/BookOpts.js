import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { removeBook } from '../redux/books/books';

const BookOpts = ({ id }) => {
  const dispatch = useDispatch();

  const RemoveBook = async () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-options">
      <a href="/#">Comments</a>
      {' | '}
      <a href="/#" onClick={RemoveBook}>Remove</a>
      {' | '}
      <a href="/#">Edit</a>
    </div>
  );
};

BookOpts.propTypes = ({
  id: PropTypes.number,
}).isRequired;

export default BookOpts;
