import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Game from './Game';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hangman" render={() => <Game />} />
      </Switch>
    </div>
  );
}

export default App;
