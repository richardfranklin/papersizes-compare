import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import the category picker action
import { selectPaper } from '../actions/action_paper-selector'; 

class PaperSelector extends Component {

    constructor(props) {
        super();

        this.state = { activePaper: '' };

        this.renderPaperList = this.renderPaperList.bind(this);
        this.paperChanged = this.paperChanged.bind(this);
    }

    renderPaperList() {
        if (this.props.activeCategoryArr) {
            return this.props.activeCategoryArr.map((active) => {
                return (
                    <option 
                        key={active.paperName}>
                        {active.paperName}
                    </option>
                );
        });
        }
    }

    paperChanged(event) {
        this.setState({ activePaper: event.target.value },() => {
            // call activePaper action
            this.props.selectPaper(this.state.activePaper);
        })
    }

    render() {

        if (this.props.category === null) {
            return <p>Please select a category</p>
        }

        return (
            <select onChange={this.paperChanged}>
                {this.renderPaperList()}
            </select>
        )
    };
}

function mapStateToProps(state) {
    // console.log(state.categories[state.activeCategory]);
    return {
        activeCategoryArr: state.categories[state.activeCategory]
    };
}

function mapDispatchToProps(dispatch) {
    // Whenever selectPaper is called, the result should be passed
    // to all of our reducers, then onto all the containers/components
    return bindActionCreators({ selectPaper: selectPaper }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PaperSelector);