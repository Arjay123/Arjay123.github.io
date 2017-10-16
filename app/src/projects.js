import React from 'react';
import './projects.css';
import recipebook from './recipebook-large.png';
import neighborhoodmap from './neighborhoodmap-large.png';
import itemcatalog from './itemcatalog-large.png';
import multiuserblog from './multiuserblog-large.png';
import $ from 'jquery';

class Project extends React.Component {

    constructor(props) {
        super(props);

        this.handleImgMouseEnter = this.handleImgMouseEnter.bind(this);
        this.handleImgMouseLeave = this.handleImgMouseLeave.bind(this);

        this.state = {
            hiddenOverlay: true
        }
    }

    handleImgMouseEnter(e){
        this.setState({
            hiddenOverlay: false
        });
    }

    handleImgMouseLeave(e){
        this.setState({
            hiddenOverlay: true
        });
    }

    componentDidMount() {
        console.log("project-img: " + $('.project-img').width());
        console.log("project-img-overlay: " + $('.project-img-overlay').width());
    }

    render() {

        var overlayClass = 'project-img-overlay';

        var overlayIcons = this.props.links.map((link) =>
            <OverlayIcon icon={link.name} text={link.text} link={link.url} />
        );

        console.log(overlayIcons);


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
                        <img className='project-img' src={this.props.img} />
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

    handleMouseEnter(){
        this.setState({
            transparent: false
        });
    }

    handleMouseLeave(){
        this.setState({
            transparent: true
        });
    }

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
        'title': 'Recipe Book',
        'img': recipebook,
        'desc': 'Lorem ipsum dolor sit amet, eu saperet commune voluptua quo, atomorum gubergren reformidans no pri. Et qui error ocurreret liberavisse. Alii delenit sit ne, ex vis congue causae tacimates. Tibique accusata per eu. Eu quo mucius fabellas inimicus, appellantur complectitur an duo, vix cu utinam partem.',
        'links': [
            { name: 'github', url: '#', text: 'View Source Code'},
            { name: 'file-text', url: '#', text: 'Visit Page'}
        ]
    },
    {
        'title': 'Neighborhood Map',
        'img': neighborhoodmap,
        'desc': 'Lorem ipsum dolor sit amet, eu saperet commune voluptua quo, atomorum gubergren reformidans no pri. Et qui error ocurreret liberavisse. Alii delenit sit ne, ex vis congue causae tacimates. Tibique accusata per eu. Eu quo mucius fabellas inimicus, appellantur complectitur an duo, vix cu utinam partem.',
        'links': [
            { name: 'github', url: '#', text: 'View Source Code'},
            { name: 'file-text', url: '#', text: 'Visit Page'}
        ]
    },
    {
        'title': 'Item Catalog',
        'img': itemcatalog,
        'desc': 'Lorem ipsum dolor sit amet, eu saperet commune voluptua quo, atomorum gubergren reformidans no pri. Et qui error ocurreret liberavisse. Alii delenit sit ne, ex vis congue causae tacimates. Tibique accusata per eu. Eu quo mucius fabellas inimicus, appellantur complectitur an duo, vix cu utinam partem.',
        'links': [
            { name: 'github', url: '#', text: 'View Source Code'},
            { name: 'file-text', url: '#', text: 'Visit Page'}
        ]
    },
    {
        'title': 'Multi User Blog',
        'img': multiuserblog,
        'desc': 'Lorem ipsum dolor sit amet, eu saperet commune voluptua quo, atomorum gubergren reformidans no pri. Et qui error ocurreret liberavisse. Alii delenit sit ne, ex vis congue causae tacimates. Tibique accusata per eu. Eu quo mucius fabellas inimicus, appellantur complectitur an duo, vix cu utinam partem.',
        'links': [
            { name: 'github', url: '#', text: 'View Source Code'},
            { name: 'file-text', url: '#', text: 'Visit Page'}
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