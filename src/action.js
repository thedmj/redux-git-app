import request from "superagent";
import {hashHistory} from "react-router";

const host = "http://101.200.129.112:9527/deploy/";
var initurl = host+"init";
var loginurl = host+"login";

export function init(){
    return function(dispatch){
        request.get(initurl).withCredentials().end(function(err,res){
            if(res.body){
                dispatch({
                    type:"get-init",
                    data:res.body
                });
                hashHistory.push("home");
            }else{
                hashHistory.push("login");
            }
            
        });
    }
}
export function login(query){
    return function(dispatch){
            request.get(loginurl).query(query).withCredentials().end(function(err,res){
                dispatch(init());
        });
    }
}