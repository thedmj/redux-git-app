/**
 * Created by ljc on 2016/11/30.
 */

import {combineReducers} from 'redux'

var me = function (state={info:{},project:[],users:[]}, action) {
    switch (action.type){
        case 'get-init':
            return Object.assign({},state,{info:action.info,project:action.project,users:action.users})

        case 'create-project':
            var p = action.project
            return Object.assign({},state,{project:[...state.project,action.project]})
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
    url:'',
    deploy:'',
}},action) {
    switch (action.type){
        case 'get-detail':
            var remote = action.data.remote_branches
            var local =  action.data.local_branches
            var ro = []
            var lo = []
            for(var branch in remote){
                if(branch != 'origin/HEAD'){
                    ro.push(branch.replace('origin/',''))
                }
            }
            for(var branch in local){
                lo.push(branch)
            }



            var p = Object.assign({},action.data,{remote_branches:ro,local_branches:lo})

            return Object.assign({},state,{project:p})
        case 'new-local-branch':

            var local =  state.project.local_branches
            var l = [...local,action.name]
            console.log(state,11111)
            return Object.assign({},state,{local_branches:l})
    }
    return state
}

var reducer = combineReducers({
    me,
    users,
    detail
})
export default reducer