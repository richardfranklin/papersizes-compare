// State argument is not application state, only the state
// this reducer is responsible for
export function CategoryReducer_1 (state = null, action) {

    switch(action.type) {
        case `CATEGORY_1_SELECTED`:
        return action.payload;
    }
    return state;
}

export function CategoryReducer_2 (state = null, action) {
    
    switch(action.type) {
        case `CATEGORY_2_SELECTED`:
        return action.payload;
    }
    return state;
}