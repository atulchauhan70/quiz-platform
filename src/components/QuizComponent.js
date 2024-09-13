import React, { useState } from 'react';
import { validateQuiz, calculateScore } from '../utils/quizUtils'; // Adjust the import path as needed

const QuizComponent = () => {
  const [quiz] = useState({
    title: 'Sample Quiz',
    questions: [
      { questionText: 'What is React?', options: ['Library', 'Framework', 'Language', 'Tool'], correctOption: 0 },
      { questionText: 'Which hook is used for state management?', options: ['useState', 'useEffect', 'useReducer', 'useMemo'], correctOption: 0 }
    ]
  });

  const [answers, setAnswers] = useState([0, 0]); // Initialize with default values

  const handleAnswerChange = (questionIndex, selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = selectedOption;
    setAnswers(newAnswers);
  };

  const handleValidateQuiz = () => {
    const error = validateQuiz(quiz);
    if (error) {
      console.error('Validation error:', error);
    } else {
      console.log('Quiz is valid.');
    }
  };

  const handleCalculateScore = () => {
    const score = calculateScore(quiz.questions, answers);
    console.log('Score:', score);
  };

  return (
    <div>
      <h2>{quiz.title}</h2>
      {quiz.questions.map((question, qIndex) => (
        <div key={qIndex}>
          <h3>{question.questionText}</h3>
          {question.options.map((option, oIndex) => (
            <div key={oIndex}>
              <input
                type="radio"
                id={`q${qIndex}o${oIndex}`}
                name={`question${qIndex}`}
                checked={answers[qIndex] === oIndex}
                onChange={() => handleAnswerChange(qIndex, oIndex)}
              />
              <label htmlFor={`q${qIndex}o${oIndex}`}>{option}</label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleValidateQuiz}>Validate Quiz</button>
      <button onClick={handleCalculateScore}>Calculate Score</button>
    </div>
  );
};

export default QuizComponent;
