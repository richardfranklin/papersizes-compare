import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import the category picker action
import { selectCategory } from '../actions/action_category-selector';

class CategorySelector extends Component {

    constructor(props) {
        // super is required here
        super();

        this.state = { activeCategory: '' };

        this.categoryChanged = this.categoryChanged.bind(this);
    }

    renderCategoryList() {
        var categoryObj = this.props.categories;

        // Map the paper list object (state) to a new object and loop through, printing all the keys
        return Object.keys(categoryObj).map((category) => {
            return (
                <option key={category}>{category}</option>
            );
        });
    }

    categoryChanged(event) {
        this.setState({ activeCategory: event.target.value }, () => {
            this.props.selectCategory(this.state.activeCategory);
        });
    }
    
    render() {
        return (
            // <select onChange={() => this.props.selectCategory("Canadian")}>
            <select onChange={this.categoryChanged}>
                {this.renderCategoryList()}
            </select>
        );
    }
}

function mapStateToProps(state) {
    // This maps the overall state to the 'props' of this class/container.
    // Whatever is returned from here will show up as props
    // inside of BookList
    return {
        categories: state.categories
    }
}

// This is mapping ACTIONS to the current container's 'props'.
// Anything returned from this function will end up as props
// on the bookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectCategory is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ selectCategory: selectCategory }, dispatch)
}

// Promote CategorySelector from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(CategorySelector);