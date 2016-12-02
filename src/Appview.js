import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import Login from "./compones/Login";
import Page404 from "./compones/page404";
import {init} from "./action";
import Home from "./compones/Home";
import Me from "./compones/Me";
import User from "./compones/User";
import "antd/dist/antd.min.css";
var Appview = React.createClass(
    {
        render() {
            console.log(this.props);
            return (
                <Router history={hashHistory}>
                    <Route path="/" component={Home}/>
                    <Route path="login" component={Login}/>
                    <Route path="home" component={Home}/>
                    <Route path="me" component={Me} />
                    <Route path="user" component={User}/>
                    <Route path="*" component={Page404} />
                </Router>
            );
        },
        componentDidMount(){
            this.props.dispatch(init());
        }
    }
)

export default Appview;
