import React, { Component } from "react";
import './form.css'
import RaisedButton from "material-ui/RaisedButton";

export default class Form extends Component {

  render() {
    return (
        <div className="form-section">
            <form className="mui-form">
                <legend>Project Title</legend>
                    <section className="mui-textfield">
                        <input type="text"></input>
                        <label>Input 1</label>
                    </section>
                    <section className="mui-textfield">
                        <input type="text"></input>
                        <label>Input 2</label>
                    </section>
                    <section className="mui-textfield">
                        <textarea></textarea>
                        <label>Textarea</label>
                    </section>
                    <RaisedButton type="submit" className="mui-btn mui-btn--raised">Submit</RaisedButton>
            </form>
        </div>
    );
  }
}
