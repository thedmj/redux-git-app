import React from "react";
import { connect } from "react-redux";
// import { Link,hashHistory } from "react-router";
import { Row, Col, Steps, Button } from "antd";
import { detail ,deploy,branch,checkout,pull,reset,editDeploy } from "../../action";
const Step = Steps.Step;

var Repo = React.createClass({
    getInitialState() {
        return {}
    },
    render() {
        var This = this;
        var project = this.props.project;
        var {active_branch, admin, commit_info, description, folders, local_branches, logo, name, remote_branches, url,deploy} = project;
        
      
        var remote_branches_nodes = remote_branches.map(function(o,i){
            return (<a onClick={()=>{This.branchhandle(o)}} className={o==="/"+active_branch?"active":""} key={i} href="javascript:void(0)">{o}&nbsp;|&nbsp;</a>);
        });
        var local_branches_nodes = local_branches.map(function(o,i){
            return (<a onClick={()=>{This.checkouthandle(o)}} className={o===active_branch?"active":""} key={i} href="javascript:void(0)">{o}&nbsp;|&nbsp;</a>);
        });
        var stepnode = [];
        commit_info.map(function (o, i) {
            var step = (
                <Step key={i} title={o.committer.message} description={(
                    <Row>
                        <Col span={12}>
                            <p>{o.committer.name}</p>
                            <p>{o.committer.email}</p>
                            <p><Button type="ghost" onClick={()=>{This.reset(o.sha)}}>reset to here</Button></p>
                        </Col>
                        <Col span={12}>
                            <p>{o.message}</p>
                            <p>{o.summary}</p>
                            <p>{o.time}</p>
                        </Col>
                    </Row>
                )} />
            )
            stepnode.unshift(step);
            return step
        });
        var commit_index = commit_info.length -1;
        return (
            <div className="repo">
                <Row>
                    <Col span={20} offset={1}>
                        <h2><span>项目名称：</span>{name}</h2>
                        <h2><span>作者：</span>{admin.name}</h2>
                        <Col className="repoContent" push={1} span={6}>
                            <h3>folders:</h3>
                            {folders.map(function (o, i) {
                                return (
                                    <a onClick={()=>{This.editDeploy(o)}} className={o===deploy?"active":""} key={i} href="javascript:void(0)">/{o}&nbsp;</a>
                                );
                            })}
                            <h3>deploy</h3>
                            <div>{deploy}</div>
                            <h3>remote_branches:</h3>
                            <div>{remote_branches_nodes}</div>
                            <h3>local_branches:</h3>
                            <div>{local_branches_nodes}</div>
                            <h3>active_branch:</h3>
                            <p><a href="javascript:void(0)">{active_branch}</a></p>
                            <Button onClick={this.pull}>PULL</Button>
                            <Button onClick={this.deployhandle}>上线</Button>
                        </Col>

                        <Col span={18} className="repoContent">
                            <h1>commit_info:</h1>
                            <Steps direction="vertical" current={commit_info.length -1}>
                                {stepnode}
                            </Steps>
                        </Col>
                    </Col>

                </Row>

            </div>

        );

    },
    componentDidMount() {
        var id = this.props.params.id;
        this.props.dispatch(detail({ repo_id: id }));
    },
    deployhandle(){
        var {id} = this.props.params;
        this.props.dispatch(deploy({repo_id:id}));
    },
    branchhandle(o){
        var {id} = this.props.params;
        this.props.dispatch(branch({repo_id:id,branch:o}));
    },
    checkouthandle(o){
        var {id} = this.props.params;
        this.props.dispatch(checkout({repo_id:id,branch:o}));
    },
    pull(){
        var {id} = this.props.params;
        this.props.dispatch(pull({repo_id:id}));
    },
    reset(sha){
        var {id} = this.props.params;
        this.props.dispatch(reset({repo_id:id,sha:sha}));
    },
    editDeploy(folder){
        var {id} = this.props.params;
        this.props.dispatch(editDeploy({repo_id:id,deploy:folder}));
    }
});

function store2Props(store) {
    return {
        project: store.detail.project,
    }
}
function dispatch2Props(dispatch) {
    return {
        dispatch
    }
}

Repo = connect(store2Props, dispatch2Props)(Repo);

export default Repo;