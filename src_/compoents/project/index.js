/**
 * Created by ljc on 2016/11/26.
 */
import React from 'react'
import $ from 'jquery'
import {hashHistory} from 'react-router'
var ip = 'http://101.200.129.112:9527'
var Project = React.createClass({
    render(){
        return (
            <div>project</div>
        )
    },
    componentDidMount(){
        console.log(1111)
        $.ajax({
            url:ip+'/deploy/project/',
            success:function (res) {

                if(res.noLogin){
                    hashHistory.push('login')
                }

            },
            crossDomain: true,
            contentType: "application/json",
            xhrFields: {
                withCredentials: true
            }
        })
    }
})

export default Project