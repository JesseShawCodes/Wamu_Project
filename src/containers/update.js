import React, { Component } from "react";
import Project from '../components/updates/project'

export default class Update extends Component {

  render() {
    return (
        <section className="mui-textfield">
            <legend>Select your Project</legend>
            <Project project="DCist" />
        </section>
    );
  }
}
