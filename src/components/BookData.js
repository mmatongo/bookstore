import React from 'react';
import PropTypes from 'prop-types';

const BookData = ({ category, title }) => (
  <div>
    <p className="category">{category}</p>
    <p className="title">{title}</p>
  </div>
);

BookData.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BookData;
