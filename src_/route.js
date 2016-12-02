/**
 * Created by ljc on 2016/11/30.
 */
import React from 'react'

import User from './compoents/user'
import Project from './compoents/project'
import Login from './compoents/login'
import Page404 from './compoents/page-404'
import Me from './compoents/me'
import Home from './compoents/home'
import Repo from './compoents/repo'
import {
    Router,
    Route,
    IndexRoute,
    Link,
    hashHistory,
    browserHistory
} from 'react-router';

import {Provider,connect} from 'react-redux'
import {init,login,reset} from './action'
var R = React.createClass({
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="login" component={Login}></Route>
                <Route path="user" component={User}></Route>
                <Route path="me" component={Me}></Route>
                <Route path='repo/:name' component={Repo}></Route>
                <Route path="project" component={Project}></Route>
                <Route path="home" component={Home}></Route>
                <Route path="*" component={Page404}></Route>

            </Router>
        )
    },
    componentDidMount(){
        const {init,dispatch,login,reset} = this.props
        // dispatch(login({name:'lielie2',password:'lielie2'}))
        dispatch(init())
        // dispatch(reset({name:111,age:222}))
    },
})

var store2props = function (store) {
    return {
        aaa:store
    }
}
// import {bindActionCreators} from 'react-redux'
var action2props = function (dispatch) {
    return {
        init:init,
        dispatch:dispatch,
        login : login,
        reset:reset,

    }
}

var Rout = connect(store2props,action2props)(R)


export default Rout