// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// Enable in case IE support is needed
// import 'react-app-polyfill/ie9';

// Custom components
import App from './components/App/';

// Styles
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './index.scss';


ReactDOM.render(<App />, document.getElementById('root'));
