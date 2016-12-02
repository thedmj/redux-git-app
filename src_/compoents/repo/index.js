/**
 * Created by ljc on 2016/11/26.
 */
import React from 'react'
import {Link} from 'react-router'
import {Col,Row} from 'antd'
var Repo = React.createClass({
    render(){
        return (
            <div>repo</div>
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

var R = connect(store2props)(Repo)

export default R