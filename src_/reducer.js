/**
 * Created by ljc on 2016/11/30.
 */

import {combineReducers} from 'redux'

var me = function (state={info:{},project:[],users:[]}, action) {
    switch (action.type){
        case 'get-init':
            return Object.assign({},state,{info:action.info,project:action.project,users:action.users})
    }
    return state
}

var users = function (state = {items: []}) {
    return state
}

var detail = function (state = {project:{
    admin:{},
    commit_info:[],
    description:'',
    folders:[],
    local_branches:[],
    active_branch:'',
    logo:'',
    name:'',
    remote_branches:[],
    url:''
}},action) {
    switch (action.type){
        case 'get-detail':
            return Object.assign({},state,{project:action.data})
    }
    return state
}

var reducer = combineReducers({
    me,
    users,
    detail
})
export default reducer