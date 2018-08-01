import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import Header from './containers/header'
import Form from './containers/form'

import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {
    return (
      <div>
      <Header />
      <MuiThemeProvider>
        <Form />
      </MuiThemeProvider>
      <div className="date">
        Today is {this.state.date.toLocaleTimeString()}
      </div>
      </div>
    );
  }
}
