import React, { Component } from 'react';

const hangmanStage = ["image 0", "image 1", "image 2", "image 3"];
class Game extends Component {
    render() {
        return (
            <div>
                {hangmanStage}
                
            </div>
        );
    }
}

export default Game;