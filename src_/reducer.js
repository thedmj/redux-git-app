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

var projects = function (state = {items: []}) {
    return state
}

var reducer = combineReducers({
    me,
    users,
    projects
})
export default reducer