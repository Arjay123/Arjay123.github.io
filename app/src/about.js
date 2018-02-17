import React from 'react';
import './about.css';

const content = [
    "I'm a Full Stack Web Developer with a passion for learning and problem solving.",
    "During my studies, both personal and through Udacity's Full Stack Web Developer Nanodegree, I gained experience in building web applications both on the front and back end using technologies such as Flask, Knockout.js, SQLAlchemy, React.js, and many more.",
    "Having recently completed Udacity's Full Stack Web Developer Nanodegree, I am actively looking for a full-time opportunity. Feel free to look through my Github profile linked in my Contact section. If you are interested in contacting me I can be reached through any of the methods listed in the Contact section at the bottom."
];

class About extends React.Component {
    render() {

        var cont_render = content.map((line, index) =>
                <AboutPara text={line} key={index}/>
        );

        return(
            <section id="about">
                <div className="wrap">
                    <header className="about-hdr">
                        <h1>About Me</h1>
                    </header>
                    <div className="about-content">
                        <div className="headshot-wrap">
                            <img className="headshot" src="https://avatars3.githubusercontent.com/u/5757903?s=460&v=4"/>
                        </div>
                        <div className="text-wrap">
                            {cont_render}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


class AboutPara extends React.Component {
    render() {
        return(
            <p className="about-para">{this.props.text}</p>
        );
    }
}
export default About;