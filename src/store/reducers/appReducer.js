//file: save states about app infomation: color,...
import actionTypes from "../actions/actionTypes";

//init state(avoid undefined)
const initState = {
    banner: [],
}

const appReducer = (state = initState, action) => {
    //action with each state 
    switch (action.type) {
        // get Hompage

        case actionTypes.GET_HOME:
            console.log(action);
            return {
                ...state,
                banner: action.homedata?.find(item => item.sectionType === 'banner')?.items || null
            };

        default:
            return state;
    }
}

export default appReducer;