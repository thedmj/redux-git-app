import {combineReducers} from "redux"
var me = function (state={info:{},project:[],users:[]},action) {
    // state={info:{},project:[],users:[]};
    switch (action.type){
        case "init":
            return Object.assign({},state,{
                info:action.data.info,
                project:action.data.project,
                users:action.data.users,
                loginIn:action.loginIn
            });

        default :
            return state;
    }
}

var detail = function (state={active_branch:"",project:{admin:{},commit_info:[],description:"",folders:[],local_branches:{},logo:"",name:"",remote_branches:[],url:"",deploy:""}},action) {
    
    switch (action.type){
        case "detail":
            
            var remote = action.data.remote_branches;
            
            var arr = [];
            for(var key in remote){
                if(key !== "origin/HEAD"){
                    var branch = key.replace("origin","");
                    arr.push(branch);
                }
            }
            
            action.data.remote_branches= arr;
            return Object.assign({},state,{project:action.data});
            
        default :
            return state;
    }
    
}
var reducers = combineReducers({
    me,
    detail
});



export default reducers;