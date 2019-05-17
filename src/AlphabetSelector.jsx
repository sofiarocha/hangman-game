import React from 'react';
import LetterCard from './LetterCard';

const AlphabetSelector = ({ handleClickLetter, alphabet, gameFinish }) => {
    const isBoardAvailable = () => gameFinish ? "alphabet-board disabled" : "alphabet-board active";
    return (
        <div className={isBoardAvailable()}>
        <h1 className="title">Pick a letter:</h1>
            {
              alphabet.map(letter => <LetterCard key={letter.name} letter={letter} handleClickLetter={handleClickLetter}/>)
            }     
        </div>
    );
}

export default AlphabetSelector;