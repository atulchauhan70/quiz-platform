import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateQuiz from './pages/CreateQuiz';
import TakeQuiz from './pages/TakeQuiz';
import Navbar from './components/Navbar';
import QuizComponent from './components/QuizComponent';
import './App.css'; // Ensure this includes your global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Include Navbar here */}
        <div className="page-content">
          <Routes>
            <Route path="/create-quiz" element={<CreateQuiz />} />
            <Route path="/take-quiz" element={<TakeQuiz />} />
            <Route path="/quiz-component" element={<QuizComponent />} />
            <Route path="/" element={<h1>Welcome to the Quiz Platform</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
