/**
 * Created by dingmingjie on 2016/12/1.
 */
import React from "react";
import {init,login} from "../../action";
import {connect} from "react-redux";
var Login = React.createClass({
    render(){
        return(
            <div>
                <div>
                    <span>用户名：</span>
                    <input name="username" ref="username"/>
                </div>
                <div>
                    <span>密码</span>
                    <input name="password" ref="password"/>
                </div>
                <div>
                    <button ref="login" onClick={this.login}>登录</button>
                </div>
            </div>
        )
    },
    componentDidMount(){
        // this.props.dispatch(init());
    },
    login(){
        var username = this.refs.username.value;
        var password = this.refs.password.value;
        this.props.dispatch(login({
            name:username,
            password:password
        }));
    }

});

function store2props(store) {
    return {
        info:store.me.info,
        project:store.me.project
    }
}
function dispatch2props(dispatch) {
    return {
        dispatch,
    }
}

Login = connect(store2props,dispatch2props)(Login);

export default Login;