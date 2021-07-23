import {createStore, combineReducers, applyMiddleware} from 'redux';
import evalReducer from './evaluation/reducer';
import commonReducer from './common/reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    eval: evalReducer,
    common: commonReducer
})

export default createStore(reducer, applyMiddleware(thunk));