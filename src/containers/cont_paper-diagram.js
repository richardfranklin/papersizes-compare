import React, { Component } from 'react';
import { connect } from 'react-redux';

class PaperDiagram extends Component {

    constructor(props) {
        super();
    }

    renderPaperList() {

        // console.log(this.props.activeCategoryArr);
        // console.log(this.props.activePaper);

        if (this.props.activeCategoryArr) {
            return this.props.activeCategoryArr.map((active) => {
                if (active.value === this.props.activePaper) {
                    return (
                        <p key={active.value + "dimensions"}>{active.sizex} x {active.sizey}</p>
                    )
                }
        });
        }
    }

    render() {
        if (this.props.activePaper === null) {
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

function mapStateToProps(state) {
    return {
        activeCategoryArr: state.activeCategoryArr,
        activePaper: state.activePaper
    };
}

export default connect(mapStateToProps)(PaperDiagram);