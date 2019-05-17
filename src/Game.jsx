import React, { Component } from 'react';
import alphabetArray from './alphabetArray';
import words from './wordsArray';
import AlphabetSelector from './AlphabetSelector';
import CorrectWord from './CorrectWord';
import Score from './Score';


const hangmanStage = [
    "https://res.cloudinary.com/dc4zctxhv/image/upload/v1558089351/stage_0_eva88u.png",
    "https://res.cloudinary.com/dc4zctxhv/image/upload/v1558089352/stage_1_x0l0hu.png",
    "https://res.cloudinary.com/dc4zctxhv/image/upload/v1558089353/stage_2_fbutbz.png", "https://res.cloudinary.com/dc4zctxhv/image/upload/v1558089354/stage_3_l30i1y.png", "https://res.cloudinary.com/dc4zctxhv/image/upload/v1558089355/stage_4_fixc9l.png", "https://res.cloudinary.com/dc4zctxhv/image/upload/v1558089356/stage_5_uxpjmh.png", "https://res.cloudinary.com/dc4zctxhv/image/upload/v1558089357/stage_6_iy5bbn.png"
];

let inicialState = {
    alphabet: [],
    correctWord: [],
    step: 0,
    score: 0,
    gameFinish: false
};

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = inicialState
    }

    getInicialState = () => {
        const randomWord = words[Math.floor(Math.random() * words.length)].split("");
        let inicialCorrectWord =[];
        randomWord.forEach(letter => {
            inicialCorrectWord.push({
            name: letter,
            isVisible: false
            });
        });

        inicialState = {
            alphabet: alphabetArray,
            correctWord: inicialCorrectWord,
            step: 0,
            score: 0,
            gameFinish: false
        };
        return inicialState;
    }

    handlePressKey = (event) => {
        const { alphabet, gameFinish } = this.state;
        if(gameFinish === true) {
            return null;
        } else {
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
        if(step === 6) {
            this.setState({
                gameFinish: true,
                score: 0
            });
        } else if (correctWord.every(element => element.isVisible === true)) {
            this.setState({gameFinish: true}); 
        }
    }

    componentDidMount = () => {
        this.onInicialState();
        window.addEventListener("keypress", this.handlePressKey,false);
    }

    onInicialState = () => {
        const inicialState= this.getInicialState();
        this.setState(inicialState);
    }

    render() {
        const { alphabet, step, correctWord, gameFinish, score } = this.state;
        return (
            <div className="game">
                <div className="board">
                    <img src={hangmanStage[step]} alt={step} />
                    <AlphabetSelector handleClickLetter={this.onMarkAsSelected} alphabet={alphabet} gameFinish={gameFinish}/>
                </div>
                <div className="correct-word">
                    {correctWord.map((correctLetter, index) => <CorrectWord key={index} correctLetter={correctLetter} /> )}
                </div>
                {gameFinish && <Score score={score} handleInicialState={this.onInicialState}/>}
            </div>
        );
    }
}

export default Game;