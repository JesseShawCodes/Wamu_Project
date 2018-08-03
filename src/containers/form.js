import React, { Component } from "react";
import './form.css'
import RaisedButton from "material-ui/RaisedButton";

import Deliverable from '../components/deliverable'

import { connect } from 'react-redux'
import { searchDb } from "../actions";


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            deliverableCount: 0,
            projectTitle: undefined,
            step: 1
        };
    }

    renderResults() {
        var results = []
        for (var i = 0; i < this.state.deliverableCount; i++) {
            results[i] = <Deliverable 
                number={i + 1}
                key={i}
                project={this.state.projectTitle}
            />
        }
        if (this.state.step === 3) {
            return (
                <section className="mui-form deliverable-count-form">
                    {results}
                    <section className="submit-button">
                    </section>
                </section>
            )
        }

    }

    setProjectTitle(e) {
        e.preventDefault();
        if (this.input.value.trim() === '') {
            return;
        }
        this.setState({
            projectTitle: this.input.value,
            step: 2
        })
        this.props.dispatch(searchDb(this.input.value))
    }

    projectTitle() {
        if (this.state.projectTitle === undefined && this.state.step === 1) {
            return (
                <form className="mui-form project-title-form" onSubmit={(e) => this.setProjectTitle(e)}>
                    <legend>What is the name of your project?</legend>
                    <label htmlFor="color" className="color-search-label">Project</label>
                    <input type="search" ref={input => this.input = input} />
                    <RaisedButton type="submit" className="submit-button">Submit Project Name</RaisedButton>
                </form>
            )
        }
    }

    deliverableCountInput() {
        if (this.state.step !== 1) {
           return (
                <section className="mui-form deliverable-count-form">
                    <Deliverable project={this.state.projectTitle} />
                    <section className="submit-button">
                    </section>
                </section>
           )
        }
    }
    

  render() {

    return (
        <div className="form-section">
            <div className="mui-panel">
                <h1 className="project-title">{this.state.projectTitle}</h1>
            </div>
            {this.projectTitle()}
            {this.deliverableCountInput()}
            {this.renderResults()}
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
  
export default connect(mapStateToProps)(Form)