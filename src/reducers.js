import {combineReducers} from "redux"
var me = function (state,action) {
    state={info:{},project:{},loginin:false};
    switch (action.type){
        case "get-init":
            return Object.assign({},state,{
                info:action.data.info,
                project:action.data.project,
                users:action.data.users,
            });

        default :
            return state;
    }
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