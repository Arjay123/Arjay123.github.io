import React from 'react';
import './contact.css';

class Contact extends React.Component {
    render() {
        return(
            <div id="contact">
                <div className="wrap">
                    <h1>Contact Me!</h1>
                    <div className="contact-icons">
                        <div className="contact-link-wrap github">
                            <a className="contact-link" href="#">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div className="contact-link-wrap linkedin">
                            <a className="contact-link" href="#">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div className="contact-link-wrap facebook">
                            <a className="contact-link" href="#">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div className="contact-link-wrap gmail">
                            <a className="contact-link" href="mailto:arjay.nguyen@gmail.com">
                                arjay.nguyen@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Contact;