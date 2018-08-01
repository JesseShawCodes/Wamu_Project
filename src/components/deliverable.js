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
        details: 'Enter deliverable details here'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDetailChange = this.handleDetailChange.bind(this)
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
    console.log("Testing...")
    axios.post('http://localhost:8080/', {})
    .then((result) => {
      console.log(result)
    });
  }

  render() {
    return (
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
    );
  }
}
