export function selectCategory(category, pickerNo) {
    // console.log(`A different category has been selected: ${category}`);

    console.log(pickerNo);

    // selectCategory is an ActionCreator, it needs to return an action,
    // an object with a type property.
    return  {
        type:       `CATEGORY_${pickerNo}_SELECTED`,
        payload:    category
    };
}
