import request from "superagent";
import {hashHistory} from "react-router";

const host = "http://101.200.129.112:9527/deploy/";
var initurl = host+"init/";
var loginurl = host+"login/";

export function init(){ //页面初始化
    return function(dispatch){
        request.get(initurl).withCredentials().end(function(err,res){
            if(res.body.noLogin){
                hashHistory.push("login");
            }else{
                hashHistory.push("home");
                dispatch({
                    type:"init",
                    data:res.body,
                });
            }
            
        });
    }
}
export function login(query){
    return function(dispatch){
            request.get(loginurl).query(query).withCredentials().end(function(err,res){
                if(res.body.noLogin){

                }else{
                    dispatch(init());
                }
                
        });
    }
}