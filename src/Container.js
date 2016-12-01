import store from "./store.js";
import {connect,Provider} from "react-redux";
import Appview from "./Appview.js";
import React from "react";



function store2props(store) {
    return {

    }
}
function dispatch2props(dispatch) {
    return {
        dispatch,

    }
}

var Container = connect(store2props,dispatch2props)(Appview)

var App = React.createClass({
    render(){
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    },
    componentDidMount(){
        
    }
});
export default App;