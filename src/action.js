import request from "superagent";
import React from "react";
import ReactDOM from "react-dom";
import Init from "./compones/Init";

const host = "http://101.200.129.112:9527/deploy/";
var initurl = host+"init/";
var logouturl = host+"logout/";
var detailurl = host+"detail/";
var deployurl = host + "deploy/";
var branchurl = host + "branch/";
var checkouturl = host + "checkout/";
var pullurl = host + "pull/";
var reseturl = host + "reset/";
var editDeployurl = host + "editDeploy/";

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
                dispatch({
                    type:"detail",
                    data:res.body
                });
            }
        });
    }
}
export function deploy(query){
    return function(dispatch){
        request.get(deployurl).withCredentials().query(query).end(function(err,res){
            console.log(err,res.body);
        });
    }
}
export function branch(query){
    return function(dispatch){
        request.get(branchurl).withCredentials().query(query).end(function(err,res){
            console.log(err,res);
            if(res.ok){
                dispatch({
                    type:"detail",
                    data:res.body
                });
                
            }
        });
    }
}
export function checkout(query){
    return function(dispatch){
        request.get(checkouturl).withCredentials().query(query).end(function(err,res){
            if(res.ok){
                dispatch({
                    type:"detail",
                    data:res.body
                });
            }
        });
    }
}
export function pull(query){
    return function(dispatch){
        request.get(pullurl).withCredentials().query(query).end(function(err,res){
            if(res.ok){
                dispatch({
                    type:"detail",
                    data:res.body
                });
            }
        });
    }
}
export function reset(query){
    return function(dispatch){
        request.get(reseturl).withCredentials().query(query).end(function(err,res){
            if(res.ok){
                dispatch({
                    type:"detail",
                    data:res.body
                });
            }
        });
    }
}
export function editDeploy(query){
    return function(dispatch){
        request.get(editDeployurl).withCredentials().query(query).end(function(err,res){
            if(res.ok){
                dispatch({
                    type:"detail",
                    data:res.body
                });
            }
        });
    }
}