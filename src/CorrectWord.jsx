import React from 'react';

const CorrectWord = ({ correctLetter }) => {
    const isLetterCorrect = () => correctLetter.isVisible ? "letter-visible" : "letter-invisible"
    return (
        <div className="underline">
            <p className={isLetterCorrect()}>
                {correctLetter.name}
            </p>
        </div>
    );
}

export default CorrectWord;