/**
 * Created by ljc on 2016/11/30.
 */

import request from 'superagent'

var host = 'http://101.200.129.112:9527';
var api = {
    init : '/deploy/init/',
    login: '/deploy/login/',
    logout : '/deploy/logout/'
}
import {hashHistory} from 'react-router'
export function getInit(obj) {
    return {
        type : 'get-init',
        info : obj.info,
        project:obj.project,
        users:obj.users
    }
}

export function getLogin(obj) {
    return {
        type : 'get-login',
        data : obj
    }
}

export function init() {
    return function (dispatch) {
        request
            .get(host+api.init)
            .withCredentials()
            .end(function (err, res) {
                var data = res.body
                if(data.noLogin){
                    hashHistory.push('login')
                }else {
                    hashHistory.push('home')
                    dispatch(getInit(res.body))
                }
            })
    }
}

export function reset(obj) {
    return {
        type : 'reset',
        data : obj
    }
}


export function login(query) {
    return function (dispatch) {
        console.log(dispatch,'dispatch')
        request
            .get(host+api.login)
            .query(query)
            .withCredentials()
            .end(function (err, res) {
                var data = res.body
                if(data.noLogin){

                }else {
                    dispatch(init())
                    //hashHistory.push('home')
                }
                // dispatch(getLogin(res.body))

            })
    }
}

export function logout() {
    return function (dispatch) {
        console.log(dispatch,'dispatch')
        request
            .get(host+api.logout)
            .withCredentials()
            .end(function (err, res) {
                var data = res.body
                // if(data.noLogin){
                //
                // }else {
                //     dispatch(init())
                //     //hashHistory.push('home')
                // }
                // dispatch(getLogin(res.body))

            })
    }
}