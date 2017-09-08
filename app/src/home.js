import React from 'react';
import './home.css';

class Home extends React.Component {
    render() {
        return(
            <div id="home">
                <nav>
                    <a className="nav-link" href="#">Home</a>
                    <a className="nav-link" href="#">About</a>
                    <a className="nav-link" href="#">Projects</a>
                    <a className="nav-link" href="#">Contact</a>
                </nav>
                <header className="home-hdr">
                    <h1 className="hdr-text hdr-hero">Arjay Nguyen</h1>
                    <h5 className="hdr-text hdr-support">Descriptive Text</h5>
                </header>
            </div>
        );
    }
}

export default Home;