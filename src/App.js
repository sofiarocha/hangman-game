import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Game from './Game';
import Score from './Score';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hangman" render={() => <Game />} />
        <Route path="/score" component={Score} />
      </Switch>
    </div>
  );
}

export default App;
