import React from 'react';
import './about.css';

const content = [
    'Lorem ipsum dolor sit amet, eu saperet commune voluptua quo, atomorum gubergren reformidans no pri. Et qui error ocurreret liberavisse. Alii delenit sit ne, ex vis congue causae tacimates. Tibique accusata per eu. Eu quo mucius fabellas inimicus, appellantur complectitur an duo, vix cu utinam partem.',
    'Eos at minim honestatis. Postea intellegebat an duo. Mutat minimum vix eu, id pri nostro conclusionemque, per vide quando alterum eu. Lobortis volutpat sea te, eu mel reque dictas. Ex discere referrentur sit, ceteros voluptaria et duo.',
    'No atqui dicunt deterruisset eam, usu in fuisset probatus. Quando aeterno ne nec, ei inani copiosae salutandi mel, dolore qualisque vim ad. Omnium oporteat senserit has ex. Nam in tation fuisset inciderint, numquam phaedrum concludaturque eum ea. Utamur accumsan iudicabit at pri. Cu nam animal placerat, ad vel wisi vivendo pertinacia. Duo utinam evertitur id, eam ex elitr virtute.'
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
                        <h1>This is an about me section</h1>
                    </header>
                    {cont_render}
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