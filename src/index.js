import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { Meteor } from 'meteor/meteor';
// import injectTapEventPlugin from 'react-tap-event-plugin'


ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
registerServiceWorker();
