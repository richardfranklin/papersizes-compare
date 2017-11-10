import React, { Component } from 'react';
import CategorySelector from '../containers/cont_category-list';
import PaperSelector from '../containers/cont_paper-list';
import PaperDiagram from '../containers/cont_paper-diagram';

export default class App extends Component {
  render() {
    return (
      <div>
        <CategorySelector />
        <PaperSelector />
        <PaperDiagram />
      </div>
    );
  }
}
