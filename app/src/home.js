import React from 'react';
import ReactDOM from 'react-dom';
import './home.css';
import $ from 'jquery';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {

        const nav = $('#nav');
        const navHeight = nav.height() +
                          parseInt(nav.css('margin-top'), 10) +
                          parseInt(nav.css('margin-bottom'), 10);
        const marker = $('#home').height() - navHeight;

        if($(window).scrollTop() >= marker){
            $('#nav-back').slideDown(200);
        }
        else {
            $('#nav-back').slideUp(200);
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        return(
            <div id="home">
                <div id="nav-back" className="hidden"></div>
                <nav id="nav">
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