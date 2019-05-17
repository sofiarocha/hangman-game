import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';
import Home from './Home';
import Game from './Game';
import Score from './Score';
import AboutMe from './AboutMe';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hangman" component={Game} />
        <Route path="/score" component={Score} />
        <Route path="/about" component={AboutMe} />
      </Switch>
    </div>
  );
}

export default App;
