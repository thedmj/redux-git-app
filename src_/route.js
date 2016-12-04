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
import {init,login,reset,getInit} from './action'
var R = React.createClass({
    render(){
        return (
            <Router  history={hashHistory}>
                <IndexRoute component={Home}/>
                <Route path="/" component={Home}></Route>

                <Route path="user" component={User}></Route>
                <Route path="me" component={Me}></Route>
                <Route path='repo/:id' component={Repo}></Route>
                <Route path="project" component={Project}></Route>
                <Route path="home" component={Home}></Route>

            </Router>
        )
    },

    componentWillMount(){
        const {dispatch} = this.props
        dispatch(getInit(window.initData))
    }
})

var store2props = function () {
    return {}
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