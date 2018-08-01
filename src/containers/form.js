import React, { Component } from "react";
import './form.css'
import RaisedButton from "material-ui/RaisedButton";

import Deliverable from '../components/deliverable'
import Textfield from '../components/textfield'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            deliverableCount: 0,
            countReceived: false
        };
    }

    renderResults() {
        var results = []
        for (var i = 0; i < this.state.deliverableCount; i++) {
            results[i] = <Deliverable 
                number={i + 1}
            />
        }
        return (
            <div className="mui-form deliverable-count-form">
                {results}
            </div>
        )
    }

    deliverables(e) {
        e.preventDefault();
        if (this.input.value.trim() === '') {
            return;
        }
        this.setState({
            deliverableCount: this.input.value,
            countReceived: true
        })
    }

    deliverableCountInput() {
        if (this.state.countReceived === false) {
            return (
                <form className="mui-form deliverable-count-form" onSubmit={(e) => this.deliverables(e)}>
                    <legend>Deliverable Count</legend>
                    <label htmlFor="color" className="color-search-label">Item</label>
                    <input type="search" ref={input => this.input = input} />
                    <RaisedButton type="submit" className="submit-button">Submit Deliverable Number</RaisedButton>
                </form>
            )
        }
    }
    

  render() {

    return (
        <div className="form-section">
            <form className="mui-form">
                <legend>Project Title</legend>
                    {this.deliverableCountInput()}
                    <div>
                    {this.renderResults()}
                    </div>
                    <RaisedButton type="submit" className="mui-btn mui-btn--raised">Update</RaisedButton>
            </form>
        </div>
    );
  }
}
