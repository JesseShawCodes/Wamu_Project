import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import { Meteor } from 'meteor/meteor';
// import injectTapEventPlugin from 'react-tap-event-plugin'
import Root from './Root'

ReactDOM.render(
    <Root />, 
    document.getElementById('root')
);
registerServiceWorker();
