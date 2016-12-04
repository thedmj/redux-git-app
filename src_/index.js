/**
 * Created by ljc on 2016/11/26.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import request from 'superagent'
import {
    Router,
    Route,
    IndexRoute,
    Link,
    hashHistory,
    browserHistory
} from 'react-router';

var host = 'http://101.200.129.112:9527';
var api = {
    init : '/deploy/init/',
    login: '/deploy/login/',
    logout : '/deploy/logout/'
}
import {Form,Input,Icon,Button,Row,Col} from 'antd'
const FormItem = Form.Item

import {Provider,connect} from 'react-redux'
import {createStore,compose,applyMiddleware} from 'redux'
import 'antd/dist/antd.min.css'
import thunk from 'redux-thunk'
import R from './route'

import reducer from './reducer'
var store = createStore(reducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension()
))
window.initData = null


var Init = React.createClass({
    render(){
        return (
            <div>loading...</div>
        )
    },
    componentDidMount(){
        request
            .get(host+api.init)
            .withCredentials()
            .end(function (err, res) {
                var data = res.body
                if(data.noLogin){

                    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
                    ReactDOM.render(<Login/>,document.getElementById('root'))
                }else {
                    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
                    window.initData = res.body
                    ReactDOM.render(
                        <div className="App">
                            <Provider store={store}>
                                <R/>
                            </Provider>
                        </div>,
                        document.getElementById('root')
                    )
                }
            })

    }
})

var Login = React.createClass({
    getInitialState(){
        return {
            username:'',
            password:''
        }
    },
    render(){
        return(
            <div>
                <h3>动脑学院前端项目自动发布系统</h3>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem
                        label={'用户名'}
                        labelCol={{ span: 6 }}
                        wrapperCol= {{ span: 14 }}
                    >
                        <Input
                            value={this.state.username}
                            addonBefore={<Icon type="user" />}
                            onChange={(e)=>this.setState({username:e.target.value})}
                            placeholder="Username" />
                    </FormItem>
                    <FormItem
                        label={'密码'}
                        labelCol= {{ span: 6 }}
                        wrapperCol= {{ span: 14 }}
                    >
                        <Input
                            value={this.state.password}
                            addonBefore={<Icon type="lock" />}
                            type="password"
                            onChange={(e)=>this.setState({password:e.target.value})}
                            placeholder="Password" />
                    </FormItem>
                    <Row>
                        <Col push={6} span={3}> <Button onClick={this.login}>登录</Button></Col>
                    </Row>
                    <Row>
                        <Col push={6} span={3}> <Button onClick={this.logout}>退出</Button></Col>
                    </Row>
                </Form>
            </div>
        )
    },
    login(){
        var that = this

        var query = {
            name:this.state.username,
            password:this.state.password
        }
        request
            .get(host+api.login)
            .query(query)
            .withCredentials()
            .end(function (err, res) {
                var data = res.body
                if(data.noLogin){
                    alert('没有该用户')
                }else {
                    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
                    ReactDOM.render(
                        <Init/>,
                        document.getElementById('root')
                    )
                }
            })
    },
    logout(){
        console.log('logout')
    },
})

ReactDOM.render(
    <Init/>,
    document.getElementById('root')
)
