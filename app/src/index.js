import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './home';
import registerServiceWorker from './registerServiceWorker';

class Page extends React.Component {
    render() {
        return(
            <div id="app">
                <Home />
                <App />
            </div>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
