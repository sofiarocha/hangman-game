import React, { Component } from 'react';
import alphabetArray from './alphabetArray';
import words from './wordsArray';
import AlphabetSelector from './AlphabetSelector';
import CorrectWord from './CorrectWord';

const hangmanStage = ["image 0", "image 1", "image 2", "image 3"];
const randomWord = words[Math.floor(Math.random() * words.length)].split("");
let inicialCorrectWord =[];
randomWord.forEach(letter => {
    inicialCorrectWord.push({
        name: letter,
        isVisible: false
    });
});

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alphabet: alphabetArray,
            correctWord: inicialCorrectWord,
            step: 0
        }
    }

    handlePressKey = (event) => {
        const { alphabet } = this.state;
        const newAlphabet = alphabet.map(letter => {
            if((letter.name === event.key.toLowerCase()) || (letter.isUsed === true)) {
                return {name:letter.name, isUsed: true};
            }
            return {name:letter.name, isUsed: false};
        });
        this.setState({alphabet: newAlphabet});
    }

    onMarkAsSelected = (selectedLetter) => {
        const { alphabet } = this.state;
        const newAlphabet = alphabet.map(letter => {
            if((letter.name === selectedLetter.toLowerCase()) || (letter.isUsed === true)) {
                return {name:letter.name, isUsed: true};
            }
            return {name:letter.name, isUsed: false};
        });
        this.setState({alphabet: newAlphabet});
        
    }

    componentDidMount = () => {
        document.addEventListener("keypress", this.handlePressKey);
    }

    render() {
        const { alphabet, step, correctWord } = this.state;
        return (
            <div>
                {hangmanStage[step]}
                <AlphabetSelector handleClickLetter={this.onMarkAsSelected} alphabet={alphabet}/>
                <div className="correct-word">
                    {correctWord.map((correctLetter, index) => <CorrectWord key={index} correctLetter={correctLetter} /> )}
                </div>
            </div>
        );
    }
}

export default Game;