import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { Row, Col, Button } from "antd";
import { logout } from "../../action";
import { hashHistory } from "react-router";
import $ from "jquery";
import { TimelineMax, Elastic } from "gsap";



var User = React.createClass({
    render() {
        var {data} = this.props;
        var {name, project} = data;
        var nodes = project.map(function (o, i) {
            return (
                <li key={i} onClick={() => { hashHistory.push("repo/" + o.id) } } style={{ pointer: "cursor" }}>
                    <h5 >>{o.name}</h5>
                </li>
            );
        });
        return (
            <div className="project-list">
                <h3>{name}</h3>
                <ul>
                    {nodes}
                </ul>
            </div>
        );
    }
});
var Home = React.createClass({
    render() {
        var others = this.props.store.me.users.map(function (o, i) {
            return (
                <li key={i}>
                    <User data={o} />
                </li>
            );
        });
        return (
            <div className="home">
                <Row>
                    <Col span={20} offset={2}>
                        <div className="header">
                            <h1>项目文件部署系统</h1>
                        </div>
                        <div className="mine">
                            <Row>
                                <Col span={2} offset={18}><span>欢迎回来:&nbsp;
                                    <Link to="me">
                                        {this.props.store.me.info.name}
                                    </Link></span>
                                </Col>

                                <Col span={1}>
                                    <Button onClick={this.logout}>退出</Button>
                                </Col>
                            </Row>
                        </div>
                        <Row className="others">
                            <ul className="other-users" span={4}>
                                {others}
                            </ul>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    },
    componentDidMount() {
        $(".other-users>li").each(function (i, o) {
            o.animate = false;
        }).on("mouseenter", function () {
            var t = new TimelineMax();
            var element = this;
            if (!this.animate) {
                t.from(element, 0.7, {
                    scale: 1.2, ease: Elastic.easeOut.config(1.6, 0.3), overwrite: "none", onStart: function () {
                        element.animate = true;
                    }, onComplete: function () {
                        element.animate = false;
                    }
                }, );
            }
        });
    },
    logout() {
        logout();
    }
});

function store2Props(store) {
    return {
        store: store,
    }
}
function dispatch2Props(dispatch) {
    return {
        dispatch
    }
}

Home = connect(store2Props, dispatch2Props)(Home);

export default Home;