import React from "react";
import { connect } from "react-redux";
import { Link} from "react-router";
import { Row, Col } from "antd";
import {logout} from "../../action";

var Home = React.createClass({
    render() {
        var others = this.props.store.me.users.map(function(o,i){
            return (
                <div key={o.name+i}>
                    <Link to={"users/"+o.name}>{o.name}</Link>
                </div>
            );
        });
        return (
            <div>
                <Row>
                    <Col span={2}>我</Col>
                    <Col span={4}>
                        <Link to="me">
                            {this.props.store.me.info.name}
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col span={2}>其他人</Col>
                    <Col span={4}>
                        {others}
                    </Col>
                </Row>
                <button onClick={this.logout}>退出</button>
            </div>
        )
      
    },
    logout(){
        logout();
    }
});

function store2Props(store) {
    return {
        store:store,
    }
}
function dispatch2Props(dispatch) {
    return {
        dispatch
    }
}

Home = connect(store2Props, dispatch2Props)(Home);

export default Home;