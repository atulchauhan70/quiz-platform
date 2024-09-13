// Import necessary libraries for making HTTP requests
import axios from 'axios';
import './CreateQuiz.css';

// Define the base URL for your API
const API_URL = 'https://example.com/api'; // Replace with your actual API endpoint

// Fetch all quizzes
export const fetchQuizzes = async () => {
  try {
    const response = await axios.get(`${API_URL}/quizzes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    throw error;
  }
};

// Fetch a single quiz by ID
export const fetchQuizById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/quizzes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching quiz:', error);
    throw error;
  }
};

// Create a new quiz
export const createQuiz = async (quizData) => {
  try {
    const response = await axios.post(`${API_URL}/quizzes`, quizData);
    return response.data;
  } catch (error) {
    console.error('Error creating quiz:', error);
    throw error;
  }
};

// Update an existing quiz
export const updateQuiz = async (id, quizData) => {
  try {
    const response = await axios.put(`${API_URL}/quizzes/${id}`, quizData);
    return response.data;
  } catch (error) {
    console.error('Error updating quiz:', error);
    throw error;
  }
};

// Delete a quiz
export const deleteQuiz = async (id) => {
  try {
    await axios.delete(`${API_URL}/quizzes/${id}`);
  } catch (error) {
    console.error('Error deleting quiz:', error);
    throw error;
  }
};
