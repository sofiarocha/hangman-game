import React from 'react';

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const AlphabetSelector = ({ handleClickLetter }) => {
    const handleClick = (event) => handleClickLetter(event.target.id);
        return (
            <div className="alphabet-board">
                {alphabet.map(letter => {
                    return <div onClick={handleClick} className="letter" key={letter} id={letter}>{letter.toUpperCase()}</div>
                })}     
            </div>
        );
}

export default AlphabetSelector;