import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import About from './about';
import registerServiceWorker from './registerServiceWorker';

class Page extends React.Component {
    render() {
        return(
            <div id="app">
                <Home />
                <About />
            </div>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
