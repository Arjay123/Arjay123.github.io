import React from 'react';
import ReactDOM from 'react-dom';
import './home.css';

class Home extends React.Component {
    render() {
        return(
            <div id="home">
                <nav>
                    <a className="nav-link nav-link--current" href="#">Link</a>
                    <a className="nav-link" href="#">Link</a>
                    <a className="nav-link" href="#">Link</a>
                    <a className="nav-link" href="#">Link</a>
                    <a className="nav-link" href="#">Link</a>
                </nav>
                <header>
                    <h1 className="hdr-text">Arjay Nguyen</h1>
                    <h2 className="hdr-text">This text goes underneath</h2>
                </header>
            </div>
        );
    }
}

export default Home;