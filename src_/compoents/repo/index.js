/**
 * Created by ljc on 2016/11/26.
 */
import React from 'react'
import {Link} from 'react-router'
import {Col,Row,Steps,Button} from 'antd'

const Step = Steps.Step
import {detail,deploy,branch,checkout,pull,reset,editDeploy} from '../../action'
import './index.css'

var Repo = React.createClass({
    render(){
        const {project,dispatch} = this.props
        const {
            admin,
            commit_info,
            description,
            folders,
            local_branches,
            active_branch,
            logo,
            remote_branches,
            url,
            name,
            deploy
        }= project


        var that = this



        return (
            <div className="repo">
                <Row>

                    <Col push={4} span={8}>
                        <h3>项目名字:{name}</h3>
                        <p>作者:{admin.name}</p>
                        <hr/>
                        <h4>folders:</h4>
                            {
                            folders.map(
                                (str,i)=><span key={i} onClick={(e)=>this.editDeploy(str)} className={str==deploy?'active':''}> &nbsp;{str}&nbsp;/</span>
                            )}
                        <h4>deploy:</h4>
                        <p>{deploy}</p>
                        <hr/>
                        <h4>remote_branch:</h4>
                        <div>
                            {
                                remote_branches.map(
                                    branch=><span key={branch} onClick={(e)=>that.branch(branch)}> &nbsp;{branch}&nbsp;/
                                </span>
                            )}
                        </div>

                        <h4>local_branch:</h4>
                        <div>{
                            local_branches.map(
                                branch=><span key={branch} onClick={(e)=>that.checkout(branch)} className={branch==active_branch?'active':''}> &nbsp;{branch}&nbsp;/</span>)
                            }
                        </div>
                        <div>active_branch:</div>
                        <div><span href="javascript:void(o)">{active_branch}/</span></div>


                        <hr/>
                        <div><Button onClick={this.pull}>pull</Button>&nbsp;<Button onClick={this.deploy}>上线</Button></div>
                    </Col>
                    <Col push={4} span={8}>
                        <Steps direction="vertical" current={1}>
                            {commit_info.map((obj,i)=>(
                                <Step key={i} title={obj.committer.message} description={(
                                    <Row>
                                        <Col span={12}>
                                            <p>{obj.committer.name}</p>
                                            <p>{obj.committer.email}</p>
                                            <p><Button type='ghost' onClick={(e)=>that.reset(obj.sha)}>reset to here</Button></p>
                                        </Col>
                                        <Col span={12}>
                                            <p>{obj.message }</p>
                                            <p>{obj.summary}</p>
                                            <p>{obj.time}</p>
                                        </Col>
                                    </Row>
                                )}/>
                            ))}

                        </Steps>
                    </Col>
                </Row>
            </div>
        )
    },

    editDeploy(folder){
        const {params,dispatch} = this.props
        const {id} = params
        dispatch(editDeploy({repo_id:id,deploy:folder}))
    },

    reset(sha){
        const {params,dispatch} = this.props
        const {id} = params
        dispatch(reset({repo_id:id,sha:sha}))
    },

    pull(){
        const {params,dispatch} = this.props
        const {id} = params
        dispatch(pull({repo_id:id}))
    },

    checkout(b){
        const {params,dispatch} = this.props
        const {id} = params
        dispatch(checkout({repo_id:id,branch:b}))
    },
    branch(b){
        const {params,dispatch} = this.props
        const {id} = params
        dispatch(branch({repo_id:id,branch:b}))
    },
    deploy(){
        const {params,dispatch} = this.props
        const {id} = params
        dispatch(deploy({repo_id:id}))
    },
    componentDidMount(){
        const {params,dispatch} = this.props
        const {id} = params
        dispatch(detail({repo_id:id}))
    }

})


import {connect} from 'react-redux'

var store2props = function (store) {
    return {
        info:store.me.info,
        users:store.me.users,
        project:store.detail.project
    }
}


var R = connect(store2props)(Repo)

export default R