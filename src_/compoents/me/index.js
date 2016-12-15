
/**
 * Created by ljc on 2016/11/26.
 */
import React from 'react'
import './index.css'
import {Icon,Modal,Form,Input} from 'antd'
const FormItem = Form.Item
import {Link} from 'react-router'

import {clone} from '../../action'
var Me = React.createClass({
    getInitialState(){
        return {
            showModal: false,
            url: '',
            name: ''
        }
    },
    render(){
        const {project} = this.props
        const {showModal, url, name} = this.state
        var nodes = project.map(function (obj, i) {
            return (
                <li key={i}>
                    <Link to={'repo/' + obj.id}>
                        <p>{obj.name}</p>
                        <p>{obj.description}</p>
                    </Link>
                </li>
            )
        })
        return (
            <div>
                <ul className="me-project">
                    {nodes}
                    <li className="me-project-create" onClick={(e) => this.setState({showModal: true})}>
                        <Icon type="plus"/>
                    </li>
                </ul>
                <Modal
                    title={'create project'}
                    visible={showModal}
                    onOk={this.ok}
                    onCancel={this.cancel}
                >
                    <Form>
                        <FormItem
                            label='url'
                            labelCol={{span: 4}}
                            wrapperCol={{span: 20}}
                        >
                            <Input value={url} onChange={(e) => this.setState({url: e.target.value})}/>
                        </FormItem>

                        <FormItem
                            label='name'
                            labelCol={{span: 4}}
                            wrapperCol={{span: 20}}
                        >
                            <Input value={name} onChange={(e) => this.setState({name: e.target.value})}/>
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    },
    cancel(){
        this.setState({
            showModal: false,
            url: '',
            name: ''
        })
    },
    ok(){
        const {dispatch} = this.props
        const {url,name} = this.state

        var cb = this.cancel
        dispatch(clone({url,name},cb))
    }
})

import {connect} from 'react-redux'

var store2props = function (store) {
    return{
        project:store.me.project
    }
}

var M = connect(store2props)(Me)

export default M