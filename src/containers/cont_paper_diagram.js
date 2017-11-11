import React, { Component } from 'react';
import { connect } from 'react-redux';

class PaperDiagram extends Component {

    constructor(props) {
        super();
    }

    renderPaperList() {

        if (this.props['activeCategoryArr_' + this.props.picker]) {
            return this.props['activeCategoryArr_' + this.props.picker].map((active) => {
                if (active.value === this.props['activePaper_' + this.props.picker]) {
                    return (
                        <p key={active.value + "dimensions"}>{active.sizex} x {active.sizey}</p>
                    )
                }
        });
        }
    }

    render() {
        if (this.props['activePaper_' + this.props.picker] === null) {
            return (
                <p>Nothing Selected</p>
            );
        }
        return (
            <div>
                {this.renderPaperList()}
            </div>
        ) 
    }

}

function mapStateToProps(state, ownProps) {
    return {
        ['activeCategoryArr_' + ownProps.picker]: state['activeCategoryArr_' + ownProps.picker],
        ['activePaper_' + ownProps.picker]: state['activePaper_' + ownProps.picker] 
    };
}

export default connect(mapStateToProps)(PaperDiagram);