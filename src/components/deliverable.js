import React, { Component } from "react";
import './deliverable.css';
import Calendar from 'react-calendar';
import RaisedButton from "material-ui/RaisedButton";
import axios from 'axios';

export default class Deliverable extends Component {
  constructor(props) {
    super(props);
    this.state = {
        textReceived: false,
        date: new Date(),
        deliverable: 'Deliverable Title',
        details: 'Enter deliverable details here',
        project: this.props.project,
        projectDeliverables: [],
        submited: false,
        receivedData: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDetailChange = this.handleDetailChange.bind(this)
    this.submitProjectInfo = this.submitProjectInfo.bind(this)
  }

  onChange = date => this.setState({ date })

  handleChange(event) {
    this.setState({deliverable: event.target.value})
  }

  handleDetailChange(event) {
    this.setState({details: event.target.value})
  }

  submitProjectInfo(e) {
    e.preventDefault();
    axios.post('http://localhost:8080/', {
      deliverable: this.state.deliverable,
      date: this.state.date,
      details: this.state.details,
      project: this.state.project 
    })
    .then((result) => {
      this.setState({receivedData: true})
    });
  }

  renderResultsInDatabase() {
    axios.get('http://localhost:8080/data')
    .then(data => console.log(data))
    if (this.state.receivedData === true) {
      return (
        <h1>Testing</h1>
      )
    }

  }

  render() {
    console.log(this.props.project)
    return (
        <div>
        <form onSubmit={this.submitProjectInfo}>
        <section className="mui-textfield deliverable">
            <input type="text" name="deliverable" value={this.state.deliverable} onChange={this.handleChange}></input>
            <label>Deliverable {this.props.number}</label>
            <textarea type="text" name="deliverable" value={this.state.details} onChange={this.handleDetailChange} />
            <label>Details</label>
            <section className="calendar-input">
            <Calendar
                onChange={this.onChange}
                value={this.state.date}
            />
            </section>
        </section>
        <RaisedButton type="submit" className="mui-btn mui-btn--raised">Update Deliverable</RaisedButton>
        </form>
        {this.renderResultsInDatabase()}
        </div>
    );
  }
}
