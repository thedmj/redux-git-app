import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import Login from "./compones/Login";
import Page404 from "./compones/page404";
import {init,login} from "./action";
var Appview = React.createClass(
    {
        render() {
            console.log(hashHistory);
            return (
                <Router history={hashHistory}>
                    <Route path="login" component={Login}/>
                    <Route path="*" component={Page404} />
                </Router>
            );
        },
        componentDidMount(){
            this.props.dispatch(login({
                name:"lielie2",
                password:"lielie2"
            }));
            this.props.dispatch(init());
            
        }
    }
)

export default Appview;
