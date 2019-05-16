import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            Hello Hangman
            <button className="instructions">How to Play</button>
            <Link to="/hangman" className="play">Let's Play</Link>
        </div>
    );
}

export default Home;