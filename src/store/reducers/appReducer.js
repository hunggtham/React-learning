//file: save states about app infomation: color,...
import actionTypes from "../actions/actionTypes";

//init state(avoid undefined)
const initState = {
    homeData: [],
    test: 'Test 123',
}

const appReducer = (state = initState, action) => {
    //action with each state 
    switch (action.type) {
        // get Hompage
        case actionTypes.GET_HOME:
            return state;

        default:
            return state;
    }
}

export default appReducer;