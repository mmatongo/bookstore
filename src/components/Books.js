import React from 'react';
import PropTypes from 'prop-types';

import BookData from './BookData';
import BookOpts from './BookOpts';
import Status from './Status';
import Progress from './Progress';

const Book = ({ info }) => (
  <div className="books-row">
    <div className="status-column">
      <BookData category={info.category} name={info.name} author={info.author} />
      <BookOpts />
    </div>
    <div className="progress-column">
      <Status percentage={info.percentage} />
      <Progress chapter={info.chapter} />
    </div>
  </div>
);

Book.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    percentage: PropTypes.string,
    chapter: PropTypes.string,
  }).isRequired,
};

export default Book;
