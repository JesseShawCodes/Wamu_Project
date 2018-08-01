import React, { Component } from "react";
// import './header.css'

export default class Deliverable extends Component {
  extraForm() {
    return (
      <div>
        Hi
      </div>
    )
  }
  render() {

    return (
        <section className="mui-textfield deliverable">
            <input type="text"></input>
            <label>Deliverable {this.props.number}</label>
            {this.extraForm()}
        </section>
    );
  }
}
