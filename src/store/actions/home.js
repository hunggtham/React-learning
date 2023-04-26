import actionTypes from "./actionTypes";
import * as apis from '../../apis';

export const getHome = () => async (dispatch) => {

    try {
        const response = await apis.getHome();

        // console.log(response.data);s
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_HOME,
                homedata: response.data.data.items
            })

        } else {
            dispatch({
                type: actionTypes.GET_HOME,
                homedata: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_HOME,
            homedata: null
        })
    }
}



//https://youtu.be/kVvOLoXjeUM?list=PLGcINiGdJE91fhdIYP2iQ5R2v0wWFrtyF&t=567