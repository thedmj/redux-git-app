import request from "superagent";
import React from "react";
import ReactDOM from "react-dom";
import Init from "./compones/Init";

const host = "http://101.200.129.112:9527/deploy/";
var initurl = host+"init/";
var logouturl = host+"logout/";
var detailurl = host+"detail/";

export function init(){ //页面初始化
    return function(dispatch){
        request.get(initurl).withCredentials().end(function(err,res){
            if(res.ok){
                dispatch({
                    type:"init",
                    data:res.body,
                });
            }
        });
    }
}
export function logout(){
    request.get(logouturl).withCredentials().end(function(err,res){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
        ReactDOM.render(<Init />,document.getElementById('root'));
    })
}

export function detail(query){
    return function(dispatch){
        request.get(detailurl).withCredentials().query(query).end(function(err,res){
            if(res.ok){
                // console.log(res.body);
                dispatch({
                    type:"detail",
                    data:res.body
                });
            }
        });
    }
}