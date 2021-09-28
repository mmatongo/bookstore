import React from 'react';
import PropTypes from 'prop-types';

const Status = ({ percentage }) => (
  <div className="completion-status">
    <i />
    <p className="completion-percentage">{percentage}</p>
    <p>Completed</p>
  </div>
);

Status.propTypes = {
  percentage: PropTypes.string.isRequired,
};

export default Status;
