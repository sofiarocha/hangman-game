import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import InstructionsModal from "./InstructionsModal";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {modalShow: false}
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <div className="Home">
                <h1 className="title">
                    Welcome to
                    <div> Hangman Game </div>
                </h1>
                <div className="button-options">
                    <button className="instructions" onClick={() => this.setState({ modalShow: true })}>How to Play</button>
                    <InstructionsModal
                    show={this.state.modalShow}
                    onHide={modalClose}
                    />
                    <Link to="/hangman" className="play"><button>Let's Play</button></Link>
                </div>
                <Link to="/about">About me</Link>
            </div>
        );
    }
}

export default Home;