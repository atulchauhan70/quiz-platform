import React, { useState } from 'react';
import QuestionCard from '../components/QuestionCard';

const TakeQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  // Dummy quiz data
  const quiz = {
    questions: [
      {
        questionText: 'What is React?',
        options: ['Library', 'Framework', 'Language', 'Tool'],
        correctOption: 0,
      },
      {
        questionText: 'Which hook is used for state management?',
        options: ['useState', 'useEffect', 'useReducer', 'useMemo'],
        correctOption: 0,
      },
    ],
  };

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleSubmit = () => {
    console.log('Submit answers');
  };

  return (
    <QuestionCard
      question={quiz.questions[currentQuestionIndex]}
      selectedOption={selectedOption}
      onOptionSelect={handleOptionSelect}
      onNext={currentQuestionIndex < quiz.questions.length - 1 ? handleNext : null}
      onSubmit={currentQuestionIndex === quiz.questions.length - 1 ? handleSubmit : null}
    />
  );
};

export default TakeQuiz;
