import React from 'react';
import './contact.css';

class Contact extends React.Component {
    render() {
        return(
            <div id="contact">
                <a name="contact"></a>
                <div className="wrap">
                    <h1>Contact Me!</h1>
                    <div className="contact-icons">
                        <ContactIcon site='github' url='#'/>
                        <ContactIcon site='linkedin' url='#'/>
                        <ContactIcon site='facebook' url='#'/>
                        <ContactIcon site='gmail' url='mailto:arjay.nguyen@gmail.com' text='arjay.nguyen@gmail.com'/>
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
            var icon = this.props.text;

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