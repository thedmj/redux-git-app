import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";

var Me = React.createClass({
    render(){
        console.log(this.props);
        var nodes = this.props.store.me.project.map(function(o,i){
            return (
                <Link to={"/repo/"+o.id}  key={o.name+i}>
                    <li>
                        <p>{o.name}</p>
                        <p>{o.description}</p>
                    </li>
                </Link>
                
            );
        });
        return (
            <div>
                <ul>
                    {nodes}
                </ul>
            </div>
        );
    }
});


function store2Props(store) {
    return {
        store:store
    }
}
function dispatch2Props(dispatch){
    return {
        dispatch,

    }
}

Me = connect(store2Props,dispatch2Props)(Me);
export default Me;