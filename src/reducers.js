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

var detail = function (state={active_branch:"",project:{admin:{},commit_info:[],description:"",folders:[],local_branches:[],logo:"",name:"",remote_branches:[],url:"",deploy:""}},action) {
    
    switch (action.type){
        case "detail":
            
            var remote = action.data.remote_branches;
            var remote_arr = [];
            for(var key in remote){
                if(key !== "origin/HEAD"){
                    var branch = key.replace("origin","");
                    remote_arr.push(branch);
                }
            }
            
            var local = action.data.local_branches;
            var local_arr = [];
            for(var key in local){
                if(key !== "origin/HEAD"){
                    var branch = key.replace("origin","");
                    local_arr.push(branch);
                }
            }
            var p = Object.assign({},action.data,{remote_branches:remote_arr,local_branches:local_arr});
            
            return Object.assign({},state,{project:p});
        case "new-local-branch":
            var local = state.project.local_branches;
            var arr =[...local,action.name]
            alert(action.name);
            console.log(state);
            return Object.assign({},state,{local_branches:arr,active_branch:action.name});
       
        default :
            return state;
    }
    
}
var reducers = combineReducers({
    me,
    detail
});



export default reducers;