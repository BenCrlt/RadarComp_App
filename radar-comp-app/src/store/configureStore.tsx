import {createStore, combineReducers, applyMiddleware} from 'redux';
import evalReducer from './evaluation/reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    eval: evalReducer
})

export default createStore(reducer, applyMiddleware(thunk));