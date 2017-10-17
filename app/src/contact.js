import React from 'react';
import './contact.css';

class Contact extends React.Component {
    render() {
        return(
            <div id="contact">
                <div className="wrap">
                    <h1>Contact Me!</h1>
                    <div className="contact-icons">
                        <ContactIcon site='github' url='https://github.com/Arjay123'/>
                        <ContactIcon site='linkedin' url='https://www.linkedin.com/in/arjaynguyen/'/>
                        <ContactIcon site='facebook' url='https://www.facebook.com/'/>
                        <ContactIcon site='gmail' url='mailto:arjay.nguyen@gmail.com' text='arjay.nguyen@gmail.com'/>
                    </div>
                    <div className="site-stack">
                        <p>This page was built with React.js. The source code can be found <a className="site-source-link" href="https://github.com/Arjay123/Arjay123.github.io/tree/dev">here</a>.</p>
                    </div>
                </div>
            </div>
        );
    }
}

class ContactIcon extends React.Component {

    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    // Replicate link click behavior for a div, opens link in new tab
    handleOnClick(){
        if(!this.props.url)
            return;

        var win = window.open(this.props.url, '_blank');
        if (win)
            win.focus();
    }

    render(){
        const linkName = "contact-link-wrap " + this.props.site;
        const iconName = "fa fa-" + this.props.site;
        var icon = <i className={iconName} aria-hidden="true"></i>;

        if(this.props.text)
            icon = this.props.text;

        return(
            <div onClick={this.handleOnClick} className={linkName}>
                <a className="contact-link">
                    {icon}
                </a>
            </div>
        );
    }
}


export default Contact;