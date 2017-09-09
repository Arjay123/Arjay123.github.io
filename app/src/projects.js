import React from 'react';
import './projects.css';

class Project extends React.Component {
    render() {
        return(
            <div className='project'>
                <div className="project-wrap">
                <img src={this.props.img} />
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
                </div>
            </div>
        );
    }
}

const projects = [
    {
        'title': 'Title',
        'img': 'http://placehold.it/200/200',
        'desc': 'Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will work correctly both with client-side routing and a non-root public URL.'
    },
    {
        'title': 'Title',
        'img': 'http://placehold.it/200/200',
        'desc': 'Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will work correctly both with client-side routing and a non-root public URL.'
    },
    {
        'title': 'Title',
        'img': 'http://placehold.it/200/200',
        'desc': 'Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will work correctly both with client-side routing and a non-root public URL.'
    },
    {
        'title': 'Title',
        'img': 'http://placehold.it/200/200',
        'desc': 'Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will work correctly both with client-side routing and a non-root public URL.'
    },
    {
        'title': 'Title',
        'img': 'http://placehold.it/200/200',
        'desc': 'Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will work correctly both with client-side routing and a non-root public URL.'
    }
];

class Projects extends React.Component {
    render() {
        var proj_render = projects.map((project, index) =>
            <Project key={index} title={project.title} img={project.img} desc={project.desc}/>
        );

        return(
            <div id='projects'>
                <div className='wrap'>
                    {proj_render}
                </div>
            </div>
        );
    }
}

export default Projects;