import React, { Component } from 'react';
import { connect } from 'react-redux';

class PaperDiagram extends Component {

    constructor(props) {
        super();
    }

    renderPaperList() {
        if (this.props.activeCategoryArr) {
            return this.props.activeCategoryArr.map((active) => {
                if (active.paperName === this.props.activePaper) {
                    return (
                        <p key={active.paperName + "dimensions"}>{active.sizex} x {active.sizey}</p>
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

        // return (
        //     <p>wfwfwfwe</p>
        // );

        return (
            <div>
                {this.renderPaperList()}
            </div>
        ) 
    }

}

function mapStateToProps(state) {
    console.log(state.categories[state.activeCategory]);

    return {
        activeCategoryArr: state.categories[state.activeCategory],
        activePaper: state.activePaper
    };
}

export default connect(mapStateToProps)(PaperDiagram);