// 1 reducer to collect all reducer 

import appReducer from "./appReducer";

//combine all recude to one, apply: using midware for redux
import { combineReducers, applyMiddleware } from "redux";

//combine reducers
const rootReducer = combineReducers({
    app: appReducer
})

export default rootReducer;