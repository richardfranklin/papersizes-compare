// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action) {

    switch(action.type) {
        case 'CATEGORY_SELECTED':
        // console.log('category selected');
        return action.payload;
    }
    return state;
}