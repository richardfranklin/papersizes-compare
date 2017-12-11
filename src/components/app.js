import React, { Component } from "react";

import PaperPicker from "../containers/cont_paper_picker";
import PaperDiagram from "../containers/cont_paper_diagram";
import PaperDiagramContainer from "../containers/cont_paper_diagram_container";

// import CategorySelector from '../containers/cont_category_selector';

export default class App extends Component {
  render() {
    return (
      <div>
        <PaperPicker picker="1" />

        <br />
        <br />
        <br />
        <PaperPicker picker="2" />

        <br />
        <br />
        <br />

        <div>
          <PaperDiagramContainer />

          {/* <PaperDiagram picker="1" />
          <PaperDiagram picker="2" /> */}
        </div>
        
      </div>
    );
  }
}
