import React, { useState } from 'react';
import './CreateQuiz.css'; // Optional: for additional styling

const CreateQuiz = () => {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState([
    { questionText: '', options: ['', '', '', ''], correctOption: 0 }
  ]);

  // Handle changes to the question text or correct option
  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  // Handle changes to individual options for a question
  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(newQuestions);
  };

  // Add a new question to the quiz
  const handleAddQuestion = () => {
    setQuestions([...questions, { questionText: '', options: ['', '', '', ''], correctOption: 0 }]);
  };

  // Save the quiz data (to be integrated with your backend API)
  const handleSaveQuiz = () => {
    // You might want to send `quizTitle` and `questions` to your backend API
    console.log('Quiz Created:', { title: quizTitle, questions });
  };

  return (
    <div className="create-quiz-container">
      <h2>Create Quiz</h2>
      <input
        type="text"
        placeholder="Quiz Title"
        value={quizTitle}
        onChange={(e) => setQuizTitle(e.target.value)}
        className="input"
      />
      {questions.map((question, qIndex) => (
        <div key={qIndex} className="question-block">
          <input
            type="text"
            placeholder="Question"
            value={question.questionText}
            onChange={(e) => handleQuestionChange(qIndex, 'questionText', e.target.value)}
            className="input"
          />
          {question.options.map((option, oIndex) => (
            <div key={oIndex} className="option-block">
              <input
                type="text"
                placeholder={`Option ${oIndex + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                className="input"
              />
              <input
                type="radio"
                name={`correctOption${qIndex}`}
                checked={question.correctOption === oIndex}
                onChange={() => handleQuestionChange(qIndex, 'correctOption', oIndex)}
              /> Correct
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleAddQuestion} className="btn">Add Question</button>
      <button onClick={handleSaveQuiz} className="btn save-btn">Save Quiz</button>
    </div>
  );
};

export default CreateQuiz;
