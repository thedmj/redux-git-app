import {combineReducers} from "redux"
var me = function (state,action) {
    // switch (action.type){
    //
    // }
    state={};
    return state;
}

var user = function (state,action) {

    state={};
    return state;
}
var reducers = combineReducers({
    me,
    user
});


export default reducers;