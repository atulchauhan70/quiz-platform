// Utility function to validate quiz data
export const validateQuiz = (quiz) => {
    if (!quiz.title || quiz.title.trim() === '') {
      return 'Quiz title is required.';
    }
    if (!Array.isArray(quiz.questions) || quiz.questions.length === 0) {
      return 'At least one question is required.';
    }
    
    for (const [index, question] of quiz.questions.entries()) {
      if (!question.questionText || question.questionText.trim() === '') {
        return `Question ${index + 1} text is required.`;
      }
      if (!Array.isArray(question.options) || question.options.length < 2) {
        return `Question ${index + 1} must have at least two options.`;
      }
      if (question.correctOption < 0 || question.correctOption >= question.options.length) {
        return `Question ${index + 1} has an invalid correct option.`;
      }
    }
  
    return null; // No validation errors
  };
  
  // Utility function to calculate the score of a quiz
  export const calculateScore = (questions, answers) => {
    if (!Array.isArray(questions) || !Array.isArray(answers)) {
      throw new Error('Invalid input data.');
    }
  
    return questions.reduce((score, question, index) => {
      if (answers[index] === question.correctOption) {
        return score + 1;
      }
      return score;
    }, 0);
  };
  
  // Utility function to format quiz questions for display or export
  export const formatQuizForExport = (quiz) => {
    if (!quiz.title || !Array.isArray(quiz.questions)) {
      throw new Error('Invalid quiz data.');
    }
  
    return {
      title: quiz.title,
      questions: quiz.questions.map((question, index) => ({
        questionText: question.questionText,
        options: question.options,
        correctOption: question.correctOption,
        index: index + 1,
      })),
    };
  };
  
  // Utility function to shuffle options for a question (useful for preventing answer pattern predictability)
  export const shuffleOptions = (options) => {
    if (!Array.isArray(options)) {
      throw new Error('Options should be an array.');
    }
  
    return options.sort(() => Math.random() - 0.5);
  };
  