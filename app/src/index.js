import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import registerServiceWorker from './registerServiceWorker';

class Page extends React.Component {
    render() {
        return(
            <div id="app">
                <Home />
                <About />
                <Projects />
                <Contact />
            </div>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById('root'));
