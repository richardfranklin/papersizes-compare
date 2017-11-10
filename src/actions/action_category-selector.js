export function selectCategory(category) {
    // console.log(`A different category has been selected: ${category}`);

    // console.log(category);

    // selectCategory is an ActionCreator, it needs to return an action,
    // an object with a type property.
    return  {
        type:           'CATEGORY_SELECTED',
        payload:        category
    };
}
