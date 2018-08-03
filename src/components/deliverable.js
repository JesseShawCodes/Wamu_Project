import React, { Component } from "react";
import './deliverable.css';
import Calendar from 'react-calendar';
import RaisedButton from "material-ui/RaisedButton";
import axios from 'axios';



//Redux Functions
import { connect } from 'react-redux'
import {
  searchDb
} from '../actions'


class Deliverable extends Component {
  constructor(props) {
    super(props);
    this.state = {
        date: new Date(),
        deliverable: 'Deliverable Title',
        details: 'Enter deliverable details here',
        project: this.props.project,
        projectDeliverables: [],
        textReceived: false,
        submited: false,
        receivedData: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDetailChange = this.handleDetailChange.bind(this)
    this.submitProjectInfo = this.submitProjectInfo.bind(this)
    this.renderResultsInDatabase = this.renderResultsInDatabase.bind(this)
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
    const { dispatch } = this.props
    var newDeliverable = {
      deliverable: this.state.deliverable,
      date: this.state.date,
      details: this.state.details,
      project: this.state.project 
    }
    axios.post('http://localhost:8080/', newDeliverable)
    // .then(this.setState({projectDeliverables: [...this.state.projectDeliverables, ]}));
    dispatch(searchDb(newDeliverable));
  }

  renderResultsInDatabase() {
    if (this.state.receivedData === true) {
    var self = this
    axios.get('http://localhost:8080/data')
    .then(function(data){
      self.setState({projectDeliverables: data.data})
      
    })
    }
  }

  render() {
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
        {this.state.projectDeliverables}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    date: state.data,
    newProject: state.newProject,
    updateProject: state.updateProject
  }
}

export default connect(mapStateToProps)(Deliverable)