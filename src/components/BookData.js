import React from 'react';
import PropTypes from 'prop-types';

const BookData = ({ category, title, author }) => (
  <div>
    <p className="category">{category}</p>
    <p className="title">{title}</p>
    <p className="author">{author}</p>
  </div>
);

BookData.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookData;
