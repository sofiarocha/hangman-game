import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Game from './Game';
import words from './wordsArray';

const App = () => {
  const wordSelected = words[Math.floor(Math.random() * words.length)];
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hangman" render={() => <Game wordSelected={wordSelected} />} />
      </Switch>
    </div>
  );
}

export default App;
