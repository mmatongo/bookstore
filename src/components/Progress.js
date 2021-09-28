import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ chapter }) => (
  <div className="book-progress">
    <p>CURRENT CHAPTER</p>
    <p className="book-progress-chapter">{chapter}</p>
    <button type="button">UPDATE PROGRESS</button>
  </div>
);

Progress.propTypes = {
  chapter: PropTypes.string.isRequired,
};

export default Progress;
