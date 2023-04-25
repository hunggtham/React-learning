// 1 reducer to collect all reducer 

import appReducer from "./appReducer";

//combine all recude to one, applyMiddleware: apply: using midware for redux
import { combineReducers, } from "redux";

//combine reducers
const rootReducer = combineReducers({
    app: appReducer
})

export default rootReducer;