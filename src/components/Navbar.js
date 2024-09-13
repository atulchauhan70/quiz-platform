import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: for additional styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/create-quiz" className="nav-link">Create Quiz</Link>
        </li>
        <li className="nav-item">
          <Link to="/take-quiz" className="nav-link">Take Quiz</Link>
        </li>
        <li className="nav-item">
          <Link to="/quiz-component" className="nav-link">Quiz Component</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
