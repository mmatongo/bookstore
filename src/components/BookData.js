import React from 'react';
import PropTypes from 'prop-types';

const BookData = ({ category, name, author }) => (
  <div>
    <p className="category">{category}</p>
    <p className="title">{name}</p>
    <p className="author">{author}</p>
  </div>
);

BookData.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookData;
