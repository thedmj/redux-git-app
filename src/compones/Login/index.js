/**
 * Created by dingmingjie on 2016/12/1.
 */
import React from "react";
import ReactDOM from "react-dom";
import Init from "../Init";
import request from "superagent";
import Particleground from "Particleground.js/production/particleground.js";
import particle from "Particleground.js/production/particle.js";

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

const host = "http://101.200.129.112:9527/deploy/";
var loginurl = host + "login/";

const Login = Form.create()(React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    },
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div id="login">
                <div id="login-background"></div>
                <Form onSubmit={this.login} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input addonBefore={<Icon type="user" />} placeholder="Username" />
                            )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
                            )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                            )}
                        <a className="login-form-forgot">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a>register now!</a>
                    </FormItem>
                </Form>
            </div>

        );
    },
    componentDidMount(){
        new Particleground.particle("#login-background");
    },
    login(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                var username = values.userName;
                var password = values.password;
                request.get(loginurl).query({
                    name: username,
                    password: password
                }).withCredentials().end(function (err, res) {
                    if (res.body.noLogin) {
                        alert("用户名或密码错误！");
                    } else {
                        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
                        ReactDOM.render(
                            <Init />,
                            document.getElementById('root')
                        )
                    }
                });
            }
        });
    }
}));












export default Login;