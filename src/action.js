import request from "superagent";
const host = "http://101.200.129.112:9527/deploy/";

var initurl = host+"init";
var loginurl = host+"login";
export function init(){
    return function(dispatch){
        request.get(initurl).withCredentials().end(function(err,res){
            console.log(err,res);
            dispatch({
                type:"aaa",
                data:""
            })
        });
    }
}
export function login(query){
    return function(dispatch){
        request.get(loginurl).query(query).withCredentials().end(function(err,res){
            if(res.ok){
                dispatch(init());
            }
        });
    }
}