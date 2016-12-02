/**
 * Created by ljc on 2016/11/26.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import {
    Router,
    Route,
    IndexRoute,
    Link,
    hashHistory,
    browserHistory
} from 'react-router';




import {Provider,connect} from 'react-redux'
import {createStore,compose,applyMiddleware} from 'redux'
import 'antd/dist/antd.min.css'
import thunk from 'redux-thunk'
import R from './route'
import reducer from './reducer'
var store = createStore(reducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension()
))


ReactDOM.render(
    <div className="App">
        <Provider store={store}>
            <R/>
        </Provider>
    </div>,
    document.getElementById('root')
)