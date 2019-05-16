import React, { Component } from 'react';
import AlphabetSelector from './AlphabetSelector';

const hangmanStage = ["image 0", "image 1", "image 2", "image 3"];
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLetter: ""
        }
    }

    onMarkAsSelected = (selectedLetter) => {
        this.setState({
            selectedLetter
        })
    }

    render() {
        const { wordSelected } = this.props; 
        return (
            <div>
                {hangmanStage}
                <AlphabetSelector handleClickLetter={this.onMarkAsSelected}/>
                <p>{wordSelected}</p>
            </div>
        );
    }
}

export default Game;