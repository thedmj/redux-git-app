import React from 'react';
import ReactDOM from 'react-dom';
import request from "superagent";
import Container from "../../Container";
import Login from "../Login";

const host = "http://101.200.129.112:9527/deploy/";
var initurl = host+"init/";

var Init = React.createClass({
    render(){
        return (
            <div>
                loading...
            </div>
        );
    },
    componentDidMount(){
        request.get(initurl).withCredentials().end(function (err,res) {
                    console.log(res.body);
                    if(res.ok){
                        if(res.body.noLogin){
                            ReactDOM.unmountComponentAtNode(document.getElementById('root'));
                            ReactDOM.render(<Login/>,document.getElementById('root'));
                        }else{
                        
                            ReactDOM.unmountComponentAtNode(document.getElementById('root'));
                            ReactDOM.render(<Container />,document.getElementById('root'));
                        }
                    }  
            });
            },
});
export default Init;