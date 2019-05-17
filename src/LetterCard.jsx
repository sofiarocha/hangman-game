import React from 'react';

const LetterCard = ({ handleClickLetter, letter }) => {
    const handleClick = (event) => handleClickLetter(event.target.id);
    const isLetterUsed = () => letter.isUsed ? "letter-disabled" : "letter-active";
    return(
        <div className={isLetterUsed()} onClick={handleClick} id={letter.name}>{letter.name.toUpperCase()}</div>
    );
}

export default LetterCard;