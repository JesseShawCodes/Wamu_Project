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
import Deliverabledetails from "./deliverabledetails";


class Deliverable extends Component {
  constructor(props) {
    super(props);
    this.state = {
        date: new Date(),
        deliverable: 'Deliverable Title',
        details: 'Enter deliverable details here',
        project: this.props.project,
        projectDeliverables: this.props.data,
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
    dispatch(searchDb(newDeliverable));
  }

  renderProjectData() {
    /*
    var DCIST = {
      deliverable1: {
          "title": "Back Up Your Website’s Files",
          "date": '2018-08-16',
          "status": 'Completed'
      },
      deliverable2: {
          "title": "Export The WordPress Database",
          "date": '2018-08-24',
          "status": 'Completed'
      },
      deliverable3: {
          "title": "Create The WordPress Database On New Host Server",
          "date": '2018-09-06',
          "status": "In Progress"
      },
      deliverable4: {
          "title": "Edit the wp-config.php File",
          "date": '2018-09-15',
          "status": "In Progress"
      },
      deliverable5: {
          "title": "Import Your Database",
          "date": '2018-09-24',
          "status": "In Progress"
      },
      deliverable6: {
          "title": "Upload The WordPress Files To Your New Host",
          "date": '2018-10-01',
          "status": "In Progress"
      },
      deliverable7: {
          "title": "Linking to New URL & Defining New Domain",
          "date": '2018-10-10',
          "status": "In Progress"
      },
      deliverable8: {
          "title": "Submit Final Project",
          "date": '2018-10-30',
          "status": "In Progress"
    }}
    */
    if (this.props.data !== undefined) {
      var deliverablesFromProject = []
      for (var i = 0; i < this.props.data.length; i++) {
        deliverablesFromProject[i] =
          <Deliverabledetails
            key={i}
            projecttitle={this.props.data[i].deliverable}
            projectdetails={this.props.data[i].details}
            dueDate={this.props.data[i].date}
          />
      }
      console.log(deliverablesFromProject)
      return (
        <section className="database-results">
          {deliverablesFromProject}
        </section>
      )
    }
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
          {this.renderProjectData()}
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
        <section className="project-data">
        </section>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    newProject: state.newProject,
    updateProject: state.updateProject
  }
}

export default connect(mapStateToProps)(Deliverable)