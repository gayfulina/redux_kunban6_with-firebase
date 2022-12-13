import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import kanban from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
    kanban,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
