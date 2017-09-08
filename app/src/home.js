import React from 'react';
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
                    <h5 className="hdr-text">Descriptive Text</h5>
                </header>
            </div>
        );
    }
}

export default Home;