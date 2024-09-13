import React from 'react';
import './QuestionCard.css'; // Optional: for additional styling

const QuestionCard = ({ question, selectedOption, onOptionSelect, onNext, onSubmit }) => {
  return (
    <div className="question-card">
      <h3>{question.questionText}</h3>
      <div className="options-container">
        {question.options.map((option, index) => (
          <div key={index} className="option-block">
            <input
              type="radio"
              name="option"
              checked={selectedOption === index}
              onChange={() => onOptionSelect(index)}
            />
            {option}
          </div>
        ))}
      </div>
      <div className="buttons-container">
        {onNext && (
          <button onClick={onNext} className="btn">Next</button>
        )}
        {onSubmit && (
          <button onClick={onSubmit} className="btn submit-btn">Submit</button>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
