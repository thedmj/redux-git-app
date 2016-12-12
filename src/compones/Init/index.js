import React from 'react';
import ReactDOM from 'react-dom';
import request from "superagent";
import Container from "../../Container";
import Login from "../Login";
import {Provider,connect} from "react-redux";
import store from "../../store";

const host = "http://101.200.129.112:9527/deploy/";
var initurl = host + "init/";

var Initview = React.createClass({
    render() {
        
        return (
            <div>
                loading...
            </div>
        );
    },
    componentDidMount() {
        var This = this;
        request.get(initurl).withCredentials().end(function (err, res) {
            if (res.ok) {
                if (res.body.noLogin) {
                    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
                    ReactDOM.render(<Login />, document.getElementById('root'));
                } else {
                    
                    This.props.dispatch({
                        type:"init",
                        data:res.body
                    });
                    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
                    ReactDOM.render(<Container />, document.getElementById('root'));

                }
            }
        });
    },
});
function store2Props(store){
    return {}
}
function dispatch2Props(dispatch){
    return {
        dispatch,

    }
}
Initview = connect(store2Props,dispatch2Props)(Initview);
var Init = React.createClass({
    render(){
        return(
            <Provider store={store}>
                <Initview />
            </Provider>
        );
    }
});

export default Init;