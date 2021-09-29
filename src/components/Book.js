import React from 'react';
import PropTypes from 'prop-types';

import BookData from './BookData';
import BookOpts from './BookOpts';
import Status from './Status';
import Progress from './Progress';

const Book = (
  {
    id, title, category,
  },
) => (
  <div className="books-row">
    <div className="status-column">
      <BookData title={title} category={category} />
      <BookOpts id={id} />
    </div>
    <div className="progress-column">
      <Status />
      <Progress />
    </div>
  </div>
);

Book.propTypes = ({
  id: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
}).isRequired;

export default Book;
