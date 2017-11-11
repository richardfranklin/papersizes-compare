import React, { Component } from 'react';

// Import sub-components
import CategorySelector from './cont_category_selector';
import PaperSelector from './cont_paper_selector';

export default class PaperPicker extends Component {

    constructor(props) {
        super();
        
        console.log(props.picker);

    }

    render() {
        return (
            <div className="picker-wrapper">
                <CategorySelector picker={this.props.picker} />
                <PaperSelector picker={this.props.picker} />
            </div>
        )
    }
}