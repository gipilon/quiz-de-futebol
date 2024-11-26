import React, { useState } from 'react';

const Quiz = ({ questions, setScore }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <p>Carregando perguntas...</p>;
  }

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.answers.map((answer, index) => (
        <button key={index} onClick={() => handleAnswer(answer.isCorrect)}>{answer.text}</button>
      ))}
    </div>
  );
};

export default Quiz;
