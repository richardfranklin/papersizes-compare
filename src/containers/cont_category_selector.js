import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select';

import { selectCategory } from '../actions/action_category_selector';

class CategorySelector extends Component {

    /* =======================================
        constructor
    ======================================= */

    constructor(props) {
        // super is required here
        super();

        // To be used to give each picker its own component
        const papercategory = props.papercategory;

        // Create new object, push all category keys (names) to it
        // to be used with select control plugin
        const categoryObj = () => {
            const categoryObj = props.categories,
                newCategoryArray = [];

            Object.keys(categoryObj).map((category) => {
                newCategoryArray.push({
                    value: category,
                    label: category
                    // sizex: category.sizex,
                    // sizey: category.sizey
                })
            });
            return newCategoryArray;
        };

        // Set component state
        this.state = {
            activeCategory: '',
            categoryObject: categoryObj(),
            categoryObjectMapped: []
        };

        this.categoryChanged = this.categoryChanged.bind(this);
    }

    /* =======================================
        categoryChanged
    ======================================= */

    categoryChanged(val) {

        // set current categoryObjectMapped from current selected property
        const   selectedActiveCatArr = this.props.categories[val.value],
                mappedActiveCatArr = [];

        // console.log(activeCategoryMappedArray);

        selectedActiveCatArr.map((currentCategory) => {
            mappedActiveCatArr.push({ 
                value: currentCategory.paperName,
                label: currentCategory.paperName,
                sizex: currentCategory.sizex,
                sizey: currentCategory.sizey
             })
        })

        this.setState({ categoryObjectMapped: mappedActiveCatArr }, () => {
            this.props.selectCategory(this.state.categoryObjectMapped, this.props.picker);
        })


    }

    /* =======================================
        render
    ======================================= */

    render() {
        return (
            <div>
            <Select
                name="form-field-name"
                value="one"
                options={this.state.categoryObject}
                onChange={this.categoryChanged}
            />
            </div>
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