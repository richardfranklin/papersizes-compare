// State argument is not application state, only the state
// this reducer is responsible for

// This reducer will pick up any 'PAPER_SELECTED' information passed to it from any action
// and update the index.js rootReducer - updating the global state and updating any react components 
export function ActivePaper_1 (state = null, action) {
    switch(action.type) {
        case 'PAPER_1_SELECTED':
        // console.log(action.payload);
        return action.payload;
    }
    return state;
}

export function ActivePaper_2 (state = null, action) {
    switch(action.type) {
        case 'PAPER_2_SELECTED':
        // console.log(action.payload);
        return action.payload;
    }
    return state;
}