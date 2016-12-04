/**
 * Created by dingmingjie on 2016/12/1.
 */
import React from "react";
import ReactDOM from "react-dom";
import Init from "../Init";
import request from "superagent";
import {Row,Col} from "antd";


const host = "http://101.200.129.112:9527/deploy/";
var loginurl = host+"login/";

var Login = React.createClass({
    render(){
        return(
            <div>
                <Row>
                    <Col span={2}>用户名：</Col>
                    <Col>
                        <input name="username" ref="username"/>
                    </Col>
                </Row>
                <Row>
                    <Col  span={2}>密码:</Col>
                    <Col>
                        <input name="password" ref="password"/>
                    </Col>
                </Row>
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
        request.get(loginurl).query({
            name:username,
            password:password
        }).withCredentials().end(function(err,res){
                if(res.body.noLogin){
                    alert("用户名或密码错误！");
                }else{
                    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
                    ReactDOM.render(
                        <Init/>,
                        document.getElementById('root')
                    )
                }
                
            });
    }

});

export default Login;