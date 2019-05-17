import React, { Component } from 'react';
import alphabetArray from './alphabetArray';
import words from './wordsArray';
import AlphabetSelector from './AlphabetSelector';
import CorrectWord from './CorrectWord';
import {Link} from 'react-router-dom';


const hangmanStage = ["image 0", "image 1", "image 2", "image 3", "image 4", "image 5", "image 6"];
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
            step: 0,
            score: 0,
            gameFinish: false
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
        this.isAnswerCorrect(event.key.toLowerCase());
        this.isScored(event.key.toLowerCase());
        this.isGameFinished();

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
        this.isAnswerCorrect(selectedLetter.toLowerCase());
        this.isScored(selectedLetter.toLowerCase());
        this.isGameFinished();
    }

    isAnswerCorrect = (pickedLetter) => {
        const { correctWord } = this.state;
        const finalCorrectWord = correctWord.map(letterObject => {
            if(letterObject.name === pickedLetter || letterObject.isVisible === true) {
                return {name: letterObject.name, isVisible: true};
            } return {name: letterObject.name, isVisible: false}
        });
        this.setState({correctWord: finalCorrectWord});
    }

    isScored = (pickedLetter) => {
        const { correctWord } = this.state;
        let { score, step } = this.state;
        if(correctWord.some(element => element.name === pickedLetter)) {
            this.setState({
                score: score + 10
            });
        } else {
            this.setState({
                step: step + 1
            })
        }
    }

    isGameFinished = () => {
        const { step, correctWord } = this.state;
        if(step === 6 || correctWord.every(element => element.isVisible === true)) {
            this.setState({gameFinish: true});
        }
    }

    componentDidMount = () => {
        window.addEventListener("keypress", this.handlePressKey,false);
    }

    //doesn't work!!!
    componentWillUnmount = () => {
        const { gameFinish } = this.state;
        if(gameFinish === true) {
            window.removeEventListener("keypress", this.handlePressKey, true);
        }
    }

    render() {
        const { alphabet, step, correctWord, gameFinish } = this.state;
        return (
            <div>
                <img src={hangmanStage[step]} alt={step}/>
                <AlphabetSelector handleClickLetter={this.onMarkAsSelected} alphabet={alphabet} gameFinish={gameFinish}/>
                <div className="correct-word">
                    {correctWord.map((correctLetter, index) => <CorrectWord key={index} correctLetter={correctLetter} /> )}
                </div>
                {gameFinish && <Link to="/score"/>}
            </div>
        );
    }
}

export default Game;