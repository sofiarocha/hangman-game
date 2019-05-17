import React from 'react';
import {Link} from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className="about">
            <h1 className="title">About Me</h1>
            <div className="author">
                <p className="name">SOFIA ROCHA</p>
                <p className="description">I'm a web developer student <a href="https://wildcodeschool.com/">@Wild Code School</a>. This project was done on my first hackathon during 24h.</p>
                <Link to="/" className="back-home"><button>Home</button></Link>
            </div>
        </div>
    );
}

export default AboutMe;