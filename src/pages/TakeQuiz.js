import React, { useState, useEffect } from 'react';
import QuestionCard from '../components/QuestionCard';
import Timer from '../components/Timer';
import Results from '../components/Results';
import './TakeQuiz.css'; // Optional: for additional styling

const TakeQuiz = () => {
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    // Fetch quiz data (this would normally be from an API)
    const fetchedQuiz = {
      title: "Sample Quiz",
      questions: [
        {
          questionText: 'What is React?',
          options: ['Library', 'Framework', 'Language', 'Tool'],
          correctOption: 0
        },
        {
          questionText: 'Which hook is used for state management?',
          options: ['useState', 'useEffect', 'useReducer', 'useMemo'],
          correctOption: 0
        }
      ]
    };
    setQuiz(fetchedQuiz);
  }, []);

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      setAnswers({
        ...answers,
        [currentQuestionIndex]: selectedOption
      });
      setSelectedOption(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setAnswers({
        ...answers,
        [currentQuestionIndex]: selectedOption
      });
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setAnswers({});
    setQuizFinished(false);
    // Optionally, fetch a new quiz here
  };

  const calculateScore = () => {
    if (!quiz) return 0;
    const correctAnswers = quiz.questions.reduce((score, question, index) => {
      if (answers[index] === question.correctOption) {
        score += 1;
      }
      return score;
    }, 0);
    return correctAnswers;
  };

  if (!quiz) {
    return <div>Loading quiz...</div>;
  }

  if (quizFinished) {
    const score = calculateScore();
    return (
      <Results
        score={score}
        totalQuestions={quiz.questions.length}
        restartQuiz={handleRestart}
      />
    );
  }

  return (
    <div className="take-quiz-container">
      <h2>{quiz.title}</h2>
      {quiz.questions[currentQuestionIndex] && (
        <QuestionCard
          question={quiz.questions[currentQuestionIndex]}
          selectedOption={selectedOption}
          onOptionSelect={handleOptionSelect}
          onNext={currentQuestionIndex < quiz.questions.length - 1 ? handleNext : null}
          onSubmit={currentQuestionIndex === quiz.questions.length - 1 ? handleSubmit : null}
        />
      )}
      <Timer timeLimit={5 * 60 * 1000} onComplete={handleSubmit} /> {/* 5 minutes timer */}
    </div>
  );
};

export default TakeQuiz;
