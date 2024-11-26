import React, { useState, useEffect } from 'react';
import Quiz from './Quiz';
import Score from './Score';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch('path/to/your/questions/api')
      .then(response => response.json())
      .then(data => setQuestions(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Quiz de Futebol</h1>
      <Quiz questions={questions} setScore={setScore} />
      <Score score={score} />
    </div>
  );
}

export default App;
