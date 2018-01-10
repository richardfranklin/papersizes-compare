import React, { Component } from "react";
import { connect } from "react-redux";

class PaperDiagramContainer extends Component {
  constructor(props) {
    super();
  }

  obtainPaperList() {
    const sizesObj = {};

    const makeObj = () => {
      this.props["activeCategoryArr_" + propNo].map(active => {
        if (active.value === this.props["activePaper_" + propNo]) {
          sizesObj["value_" + propNo + "_x"] = active.sizex;
          sizesObj["value_" + propNo + "_y"] = active.sizey;
        }
        return null;
      });
    }

    for (var propNo = 1; propNo < 3; propNo++) {
      makeObj(this);
    }

    return this.calculatePaperPercentages(sizesObj);
  }

  calculatePaperPercentages(sizesObj) {
    console.log(sizesObj);

    return (
      <div className="compare-container">
        <div className="compare-inner">
          <div className="padding-con" />
        </div>
      </div>
    );
  }

  render() {
    if (
      this.props.activePaper_1 === null ||
      this.props.activePaper_2 === null
    ) {
      return <p>Please select a paper</p>;
    }
    return <div>{this.obtainPaperList()}</div>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    activeCategoryArr_1: state.activeCategoryArr_1,
    activeCategoryArr_2: state.activeCategoryArr_2,
    activePaper_1: state.activePaper_1,
    activePaper_2: state.activePaper_2
  };
}

export default connect(mapStateToProps)(PaperDiagramContainer);
