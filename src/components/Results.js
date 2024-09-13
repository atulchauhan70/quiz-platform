import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ score, totalQuestions }) => {
  return (
    <div className="results">
      <h2>Quiz Results</h2>
      <p>Your score: {score} / {totalQuestions}</p>
    </div>
  );
};

Results.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired
};

export default Results;
