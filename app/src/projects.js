import React from 'react';
import './projects.css';
import recipebook from './recipebook-large.png';
import neighborhoodmap from './neighborhoodmap-large.png';
import itemcatalog from './itemcatalog-large.png';
import multiuserblog from './multiuserblog-large.png';

class Project extends React.Component {
    render() {
        return(
            <div className='project'>
                <div className='project-wrap'>
                <a href={this.props.link}>
                    <div className='img-wrap'>
                        <img className='project-img' src={this.props.img} />
                    </div>
                </a>
                <h2>{this.props.title}</h2>
                <p className='project-desc'>{this.props.desc}</p>
                </div>
            </div>
        );
    }
}


const projects = [
    {
        'title': 'Recipe Book',
        'img': recipebook,
        'desc': 'Lorem ipsum dolor sit amet, eu saperet commune voluptua quo, atomorum gubergren reformidans no pri. Et qui error ocurreret liberavisse. Alii delenit sit ne, ex vis congue causae tacimates. Tibique accusata per eu. Eu quo mucius fabellas inimicus, appellantur complectitur an duo, vix cu utinam partem.',
        'link': '#'
    },
    {
        'title': 'Neighborhood Map',
        'img': neighborhoodmap,
        'desc': 'Lorem ipsum dolor sit amet, eu saperet commune voluptua quo, atomorum gubergren reformidans no pri. Et qui error ocurreret liberavisse. Alii delenit sit ne, ex vis congue causae tacimates. Tibique accusata per eu. Eu quo mucius fabellas inimicus, appellantur complectitur an duo, vix cu utinam partem.',
        'link': '#'
    },
    {
        'title': 'Item Catalog',
        'img': itemcatalog,
        'desc': 'Lorem ipsum dolor sit amet, eu saperet commune voluptua quo, atomorum gubergren reformidans no pri. Et qui error ocurreret liberavisse. Alii delenit sit ne, ex vis congue causae tacimates. Tibique accusata per eu. Eu quo mucius fabellas inimicus, appellantur complectitur an duo, vix cu utinam partem.',
        'link': '#'
    },
    {
        'title': 'Multi User Blog',
        'img': multiuserblog,
        'desc': 'Lorem ipsum dolor sit amet, eu saperet commune voluptua quo, atomorum gubergren reformidans no pri. Et qui error ocurreret liberavisse. Alii delenit sit ne, ex vis congue causae tacimates. Tibique accusata per eu. Eu quo mucius fabellas inimicus, appellantur complectitur an duo, vix cu utinam partem.',
        'link': '#'
    }
];

class Projects extends React.Component {
    render() {
        var proj_render = projects.map((project, index) =>
            <Project key={index} title={project.title} img={project.img} desc={project.desc} link={project.link}/>
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