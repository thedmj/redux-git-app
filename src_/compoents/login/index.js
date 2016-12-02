/**
 * Created by ljc on 2016/11/26.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Form,Input,Icon,Button,Row,Col} from 'antd'
const FormItem = Form.Item

import {login,logout} from '../../action'
var Login = React.createClass({
    getInitialState(){
        return {
            username:'',
            password:''
        }
    },
    render(){
        return (
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
        var {dispatch} = this.props
        var query = {
            name:this.state.username,
            password:this.state.password
        }
        console.log(login,query)
        dispatch(login(query))
    },
    logout(){
        var {dispatch} = this.props
        dispatch(logout())
    },

    componentDidMount(){
        const {name} = this.props
        
    }
})

import {connect} from 'react-redux'


const store2props = function (store) {
    return {
        name : store.me.info.name
    }
}


var l = connect(store2props)(Login)



export default l