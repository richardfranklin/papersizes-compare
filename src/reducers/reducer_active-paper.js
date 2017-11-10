// State argument is not application state, only the state
// this reducer is responsible for

// This reducer will pick up any 'PAPER_SELECTED' information passed to it from any action
// and update the index.js rootReducer - updating the global state and updating any react components 
export default function(state = null, action) {
    switch(action.type) {
        case 'PAPER_SELECTED':
        // console.log(action.payload);
        return action.payload;
    }
    return state;
}