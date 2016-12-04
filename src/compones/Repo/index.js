import React from "react";
import { connect } from "react-redux";
// import { Link,hashHistory } from "react-router";
import { Row, Col } from "antd";
var Repo = React.createClass({
    render() {
        return (
            <Row>
                <Col>
                    <div>repo</div>
                </Col>
            </Row>
            
        );
        
    },
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

Repo = connect(store2Props, dispatch2Props)(Repo);

export default Repo;