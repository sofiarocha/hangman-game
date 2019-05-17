import React from 'react';
import {Link} from 'react-router-dom';

const Score = ( {score, handleInicialState} ) => {
    const isGameOver = () => (score === 0) ? true : false;
    const handleClick = () => handleInicialState();
    return (
        <div className="score">
            <div className="title">
                <h1>{isGameOver() ? "GAME OVER" : "YOU WIN"}</h1>
                <img src={isGameOver() ? "https://media.giphy.com/media/l0IyaF4KPk0clJWYE/giphy.gif" : "https://media.giphy.com/media/3og0IUEVx2NvH3iVj2/giphy.gif" } alt=""/>
            </div>
            <h2>{isGameOver() ? "" : `Your score is: ${score}`}</h2>
            <div className="score-button">
                <Link to="/hangman" className="play" onClick={handleClick}><button>Play Again</button></Link>            
                <Link to="/" className="back-home"><button>Back home</button></Link>   
            </div>
        </div>
    );
}

export default Score;