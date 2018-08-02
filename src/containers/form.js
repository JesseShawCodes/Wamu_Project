import React, { Component } from "react";
import './form.css'
import RaisedButton from "material-ui/RaisedButton";

import Deliverable from '../components/deliverable'
// import Textfield from '../components/textfield'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            deliverableCount: 0,
            countReceived: false,
            projectTitle: undefined,
            step: 1,
            projectInformation: {}
        };
    }

    submitProjectInfo(e) {
        e.preventDefault();
        console.log("Received")
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

    deliverables(e) {
        e.preventDefault();
        if (this.input.value.trim() === '') {
            return;
        }
        var projectData = {}
        for (var i = 0; i < parseInt(this.input.value, 10); i++) {
            projectData[`deliverable${i + 1}`] = {
                'date': '',
                'details': '',
                'tite': ''
            }
        }
        console.log(projectData)
        this.setState({
            deliverableCount: parseInt(this.input.value, 10),
            countReceived: true,
            step: 3,
            projectInformation: projectData
        })
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

    addADelvirable() {
        if (this.state.projectTitle !== undefined && this.state.step === 2) {
            return(
                <form>
                    Testing
                </form>
            )
        }
    }

    deliverableCountInput() {
        if (this.state.step !== 1) {
            /*
            return (
                <form className="mui-form deliverable-count-form" onSubmit={(e) => this.deliverables(e)}>
                    <legend>How Many Deliverables Does your Project have?</legend>
                    <label htmlFor="color" className="color-search-label">Item</label>
                    <input type="search" ref={input => this.input = input} />
                    <RaisedButton type="submit" className="submit-button">Submit Deliverable Number</RaisedButton>
                </form>
            )
            */
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
