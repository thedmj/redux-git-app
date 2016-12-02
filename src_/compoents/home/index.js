/**
 * Created by ljc on 2016/11/26.
 */
import React from 'react'
import {Link} from 'react-router'
import {Col,Row} from 'antd'
var Home = React.createClass({
    render(){
        const {info,users} = this.props

        var nodes = users.map(function (obj,i) {
            return (
                <li key={i}><Link to={'users/'+obj.name}>{obj.name}</Link></li>
            )
        })
        return (
            <div className="home">
                <h3>动脑学院前端项目自动发布系统</h3>
                <Row>
                    <Col span={2}>我</Col>
                    <Col span={4}><Link to='me'>{info.name}</Link></Col>
                </Row>

                <Row>
                    <Col span={2}>其他人</Col>
                    <Col span={20}>
                        <ul>
                            {nodes}
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
})


import {connect} from 'react-redux'

var store2props = function (store) {
    return {
        info:store.me.info,
        users:store.me.users
    }
}

var H = connect(store2props)(Home)

export default H