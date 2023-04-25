
import rootReducer from "./store/reducers/rootReducer";
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
//thunk: can write sync: action call api(if not, return to object(not function)) 
//return function to call api
const reduxConfig = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    //will write redux persiststore;

    return store;
}

export default reduxConfig;