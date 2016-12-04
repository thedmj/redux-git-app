import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import Page404 from "./compones/page404";
import {init} from "./action";
import Home from "./compones/Home";
import Me from "./compones/Me";
import User from "./compones/User";
import Repo from "./compones/Repo";
import "antd/dist/antd.min.css";
var Appview = React.createClass(
    {
        render() {
            return (
                <Router history={hashHistory}>
                    <Route path="/" component={Home}/>
                    <Route path="me" component={Me} />
                    <Route path="user" component={User}/>
                    <Route path="repo/:name" component={Repo}/>
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
