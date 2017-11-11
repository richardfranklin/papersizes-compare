import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select';

// Import the category picker action
import { selectPaper } from '../actions/action_paper_selector'; 

class PaperSelector extends Component {

    /* =======================================
        constructor
    ======================================= */
    
    constructor(props) {
        super();

        this.state = { 
            activePaper: '',
            paperObj: []
        };

        this.paperChanged = this.paperChanged.bind(this);
    }

    /* =======================================
        paperChanged
    ======================================= */
    
    paperChanged(val) {
        this.setState({ activePaper: val.value },() => {
            // call activePaper action
            // console.log(`paper changed: ${this.state.activePaper}`);

            // Update the state to include the current active paper (e.g. A4)
            this.props.selectPaper(this.state.activePaper, this.props.picker);
        })
    }

    /* =======================================
        render
    ======================================= */

    render() {

        if (this.props.categoryObjectMapped === null) {
            return <p>Please select a category</p>
        }

        return (
            <Select
                name="form-field-name-2"
                value="one"
                options={this.props.categoryObjectMapped}
                onChange={this.paperChanged}
            />
        )
    };
}

function mapStateToProps(state, ownProps) {
    // console.log(state.categories[state.activeCategory]);
    return {
        categoryObjectMapped: state["activeCategoryArr_" + ownProps.picker],
    };
}

function mapDispatchToProps(dispatch) {
    // Whenever selectPaper is called, the result should be passed
    // to all of our reducers, then onto all the containers/components
    return bindActionCreators({ selectPaper: selectPaper }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PaperSelector);