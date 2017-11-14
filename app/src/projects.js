import React from 'react';
import './projects.css';
import neighborhoodmap from './neighborhoodmap-large.png';
import itemcatalog from './itemcatalog-large.png';
import djangoreact from './django-react-large.png';
import gamenews from './gamenews-fix.png';

class Project extends React.Component {

    constructor(props) {
        super(props);

        this.handleImgMouseEnter = this.handleImgMouseEnter.bind(this);
        this.handleImgMouseLeave = this.handleImgMouseLeave.bind(this);

        this.state = {
            hiddenOverlay: true
        }
    }

    // show links when mouse enters image window
    handleImgMouseEnter(e){
        this.setState({
            hiddenOverlay: false
        });
    }

    // hide links after mouse leaves window
    handleImgMouseLeave(e){
        this.setState({
            hiddenOverlay: true
        });
    }

    render() {

        var overlayClass = 'project-img-overlay';

        var overlayIcons = this.props.links.map((link) =>
            <OverlayIcon key={link.name + link.url} icon={link.name} text={link.text} link={link.url} />
        );


        if(this.state.hiddenOverlay) {
            overlayClass += ' hidden';
        }

        return(
            <div className='project'>
                <div className='project-wrap'>
                    <div className='img-wrap' onMouseEnter={this.handleImgMouseEnter} onMouseLeave={this.handleImgMouseLeave}>
                        <div className={overlayClass}>
                            <div className='project-img-overlay-wrap'>
                                {overlayIcons}
                            </div>
                        </div>
                        <img className='project-img' alt={this.props.title} src={this.props.img} />
                    </div>
                    <h2>{this.props.title}</h2>
                    <p className='project-desc'>{this.props.desc}</p>
                </div>
            </div>
        );
    }
}

class OverlayIcon extends React.Component {

    constructor(props){
        super(props);

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.state = {
            transparent: true
        }
    }

    // highlight currently moused over link
    handleMouseEnter(){
        this.setState({
            transparent: false
        });
    }

    // revert to default state
    handleMouseLeave(){
        this.setState({
            transparent: true
        });
    }

    //open link in new tab
    handleOnClick(){
        var win = window.open(this.props.link, '_blank');
        if (win)
            win.focus();
    }

    render() {
        const overlayClass = this.state.transparent ? 'transparent overlay-icon' : 'overlay-icon';
        const iconClass = 'fa fa-' + this.props.icon + ' fa-3x';

        return (
            <div onClick={this.handleOnClick} className={overlayClass} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <i className={iconClass} aria-hidden="true"></i>
                <p>{this.props.text}</p>
            </div>
        );
    }
}


const projects = [
    {
        'title': 'Item Catalog',
        'img': itemcatalog,
        'desc': 'A website that allows users to perform CRUD operations on a SQLite or PostgreSQL database using Python with Flask and SQLAlchemy.',
        'links': [
            { name: 'github', url: 'https://github.com/Arjay123/fullstack-nanodegree-vm', text: 'View Source Code'},
            { name: 'file-text', url: 'http://ec2-34-214-126-81.us-west-2.compute.amazonaws.com/', text: 'Visit Page'}
        ]
    },
    {
        'title': 'GameNews',
        'img': gamenews,
        'desc': 'A website built in Django and React that compiles RSS feeds of game news websites into a single page application.',
        'links': [
            { name: 'file-text', url: 'http://www.gamenews.zone/', text: 'Visit Page'}
        ]
    },
    {
        'title': 'Django React Template',
        'img': djangoreact,
        'desc': 'The purpose of this project is to document my progress as I learn what Babel and Webpack are, how to configure them, and how to hook up React.js with Django. The end result is a small web app built with Django, Django Rest Framework, and React.js that can be used as a reference point when creating apps with a similar stack.',
        'links': [
            { name: 'github', url: 'https://github.com/Arjay123/django-react-template', text: 'View Source Code'}
        ]
    },
    {
        'title': 'Neighborhood Map',
        'img': neighborhoodmap,
        'desc': 'A website that allows users to browse through all restaurants for a certain city, using Yelp and Google Maps API.',
        'links': [
            { name: 'github', url: 'https://github.com/Arjay123/neighborhood-map', text: 'View Source Code'}
        ]
    }
];

class Projects extends React.Component {
    render() {
        var proj_render = projects.map((project, index) =>
            <Project key={index} title={project.title} img={project.img} desc={project.desc} links={project.links}/>
        );

        return(
            <div id='projects'>
                <div className='wrap'>
                    <h1>Projects</h1>
                    <div className="projects-wrap">
                        {proj_render}
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;