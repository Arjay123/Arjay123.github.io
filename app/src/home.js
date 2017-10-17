import React from 'react';
import './home.css';
import $ from 'jquery';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
        this.scrollToElement = this.scrollToElement.bind(this);
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

    scrollToElement(e){

        e.preventDefault();
        var scrollTo = $('#' + e.currentTarget.name);

        $('html, body').animate({
            scrollTop: scrollTo.offset().top
        });

    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {
        return(
            <div id="home">
                <div id="nav-back" className="hidden"></div>
                <nav id="nav">
                    <a className="nav-link" name="home" href="#home" onClick={this.scrollToElement}>Home</a>
                    <a className="nav-link" name="about" href="#about" onClick={this.scrollToElement}>About</a>
                    <a className="nav-link" name="projects" href="#projects" onClick={this.scrollToElement}>Projects</a>
                    <a className="nav-link" name="contact" href="#contact" onClick={this.scrollToElement}>Contact</a>
                </nav>
                <header className="home-hdr">
                    <h1 className="hdr-text hdr-hero">Arjay Nguyen</h1>
                    <h5 className="hdr-text hdr-support">Full Stack Web Developer</h5>
                </header>
            </div>
        );
    }
}

export default Home;