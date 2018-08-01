import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from "material-ui/RaisedButton";

import Header from './containers/header'
import Form from './containers/form'
import Update from './containers/update'

import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      newProject: false,
      updateProject: false
    };
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  updateTheProject(e) {
    e.preventDefault();
    this.setState({updateProject: true})
  }

  createNewProject(e) {
    e.preventDefault();
    this.setState({newProject: true})
  }

  initialRender() {
    if (this.state.newProject === false && this.state.updateProject === false) {
      return (
        <section className="greeting">
          <section className="greeting-details">
          <MuiThemeProvider>
          <form className="mui-form deliverable-count-form">
            <div>What Would you like to do today?</div>
            <RaisedButton type="submit" className="submit-button add-or-update" onClick={(e) => this.updateTheProject(e)}>Update a Project</RaisedButton>
            <RaisedButton type="submit" className="submit-button add-or-update" onClick={(e) => this.createNewProject(e)}>Add a Project</RaisedButton>
          </form>
          </MuiThemeProvider>
          </section>
        </section>
      )
    }
  }

  reRender() {
    if (this.state.newProject === true) {
      return (
        <section>
          <MuiThemeProvider>
          <Form />
          </MuiThemeProvider>
        </section>
      )
    }
    if (this.state.updateProject === true) {
      return (
        <section className="coming-soon">
          <Update />
        </section>
      )
    }
  }


  render() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    today = mm + '/' + dd + '/' + yyyy;
    return (
      <div>
      <Header />
      {this.initialRender()}
      {this.reRender()}
      <div className="date">
        <section className="todays-date">{today}</section>
        <section className="time">{this.state.date.toLocaleTimeString()}</section>
      </div>
      </div>
    );
  }
}
