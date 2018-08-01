import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Expansionpanelcomponent from './expansionPanel.js'

export default class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTheDetailes: false
        };
        this.showProjectDetails = this.showProjectDetails.bind(this);
        this.showProjectDetailsAfterClick = this.showProjectDetailsAfterClick.bind(this);
    }



    showProjectDetails() {
        if (this.state.showTheDetailes === false) {
            this.setState({showTheDetailes: true})
        }
        else {
            this.setState({showTheDetailes: false})
        }
    }

    showProjectDetailsAfterClick(props) {
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
            }
        }
        if (this.state.showTheDetailes === true) { 
            return (
                <div>
                <section className="mui-container-fluid">
                </section>
                    <div>
                        <Expansionpanelcomponent title={DCIST.deliverable1.title} date={DCIST.deliverable1.date} status={DCIST.deliverable1.status}/>
                        <Expansionpanelcomponent title={DCIST.deliverable2.title} date={DCIST.deliverable2.date} status={DCIST.deliverable2.status}/>
                        <Expansionpanelcomponent title={DCIST.deliverable3.title} date={DCIST.deliverable3.date} status={DCIST.deliverable3.status}/>
                        <Expansionpanelcomponent title={DCIST.deliverable4.title} date={DCIST.deliverable4.date} status={DCIST.deliverable4.status}/>
                        <Expansionpanelcomponent title={DCIST.deliverable5.title} date={DCIST.deliverable5.date} status={DCIST.deliverable5.status}/>
                        <Expansionpanelcomponent title={DCIST.deliverable6.title} date={DCIST.deliverable6.date} status={DCIST.deliverable6.status}/>
                        <Expansionpanelcomponent title={DCIST.deliverable7.title} date={DCIST.deliverable7.date} status={DCIST.deliverable7.status}/>
                        <Expansionpanelcomponent title={DCIST.deliverable8.title} date={DCIST.deliverable8.date} status={DCIST.deliverable8.status}/>
                  </div>
                  </div>
            )
        }
        else {
            return (
                <section></section>
            )
        }

    }

  render() {
    return (
        <section>
            <Button variant="contained" color="primary" onClick={this.showProjectDetails}>{this.props.project}</Button>
            {this.showProjectDetailsAfterClick()}
        </section>
    );
  }
}
