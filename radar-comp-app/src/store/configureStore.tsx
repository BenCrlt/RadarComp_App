import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import commonReducer from './common/reducer';

const persistConfig = {
    key: 'root',
    storage
}

const reducer = combineReducers({
    common: persistReducer(persistConfig, commonReducer), 
})

var store = createStore(reducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default store