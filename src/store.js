/**
 * Created by dingmingjie on 2016/12/1.
 */
import reducers from "./reducers.js";
import {createStore,compose,applyMiddleware} from "redux"
import thunk from "redux-thunk";
var store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension()
));
export default store;