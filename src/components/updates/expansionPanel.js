import React, { Component } from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import './expansionPanel.css'

export default class Expansionpanelcomponent extends Component {


  render() {


    return (
        <div className="expansion-panel-container" >
        <ExpansionPanel>
        <ExpansionPanelSummary expandIcon="+">
          <Typography>{this.props.title}</Typography>
        </ExpansionPanelSummary>
        <div className="details-container"> 
        <ExpansionPanelDetails>
            <section className="expanded-panel-typography">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
                </p>
                <p>
                This deliverable to be completed by {this.props.date}
                </p>
                <p>
                    <strong>Status:</strong> {this.props.status}
                </p>
            </section>
        </ExpansionPanelDetails>
        </div>
        </ExpansionPanel>
        </div>
    );
  }
}
