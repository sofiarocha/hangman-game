import React from 'react';

const CorrectWord = ({ correctLetter }) => {
    const isLetterCorrect = () => correctLetter.isVisible ? "letter-visible" : "letter-invisible"
    return (
            <p className={isLetterCorrect()}>
                {correctLetter.name}
            </p>
    );
}

export default CorrectWord;