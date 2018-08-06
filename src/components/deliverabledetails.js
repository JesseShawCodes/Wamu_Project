import React, { Component } from "react";
import './deliverabledetails.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faPencilAlt, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faPencilAlt, faCheckSquare)

export default class Deliverabledetails extends Component {

  render() {
    return (
        <section className="mui-textfield deliverable-details">
            <p>{this.props.projecttitle}</p>
            <p>projectdetails</p>
            <section class="icons">
            <FontAwesomeIcon icon="pencil" />
            </section>
        </section>
    );
  }
}
