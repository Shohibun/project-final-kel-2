import { createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";

const isDevelopment = false;
let composedEnhancer; 

isDevelopment 
    ? (composedEnhancer = applyMiddleware(thunkMiddleware))
    : (composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware)));

const store = createStore(rootReducer, composedEnhancer);
export default store;