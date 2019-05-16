import React from 'react';
import LetterCard from './LetterCard';

const AlphabetSelector = ({ handleClickLetter, alphabet }) => {
    return (
        <div className="alphabet-board">
            {
              alphabet.map(letter => <LetterCard key={letter.name} letter={letter} handleClickLetter={handleClickLetter}/>)
            }     
        </div>
    );
}

export default AlphabetSelector;