import request from 'superagent'
import {Promise} from 'es6-promise'
import ReactDOM from 'react-dom'
import React from 'react'

var boyMiddleware = function (data) {
    return new Promise((resolve,ject)=>{
        var result = []
        data.map(obj=>{
            if(obj.sex == 'boy'){
                result.push(obj)
            }
        })
        resolve(result)
    })
}

var manMiddleware = function (data) {
    return new Promise((resolve,ject)=>{
        var result = []
        data.map(obj=>{
            if(parseInt(obj.age) > 22){
                result.push(obj)
            }
        })
        resolve(result)
    })
}

var bodyMiddleware = function (res) {
    return new Promise((resolve,ject)=>{
        resolve(res.body)
    })
}

request
    .get('http://101.200.129.112:9527/react1/student/')
    .then(bodyMiddleware)
    .then(boyMiddleware)
    .then(manMiddleware)
    .then((data,name)=>{
        console.log(data)
    },(data,name)=>{
        console.log(222)
    })




ReactDOM.render(<div>111</div>,document.getElementById('root'))