import React from 'react';
import './App.css';
import words from './wordsArray';

function App() {
  const wordSelected = words[Math.floor(Math.random() * words.length)];
  return (
    <div className="App">
      Hello Hangman
      <p>{wordSelected}</p>
    </div>
  );
}

export default App;
