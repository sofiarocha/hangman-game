import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            <h1 className="title">
                Welcome to
                <div> Hangman Game </div>
            </h1>
            <button className="instructions">How to Play</button>
            <button><Link to="/hangman" className="play">Let's Play</Link></button>
        </div>
    );
}

export default Home;