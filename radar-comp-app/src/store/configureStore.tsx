import {createStore} from 'redux';
import addItemValue from './reducers/evalReducer';

export default createStore(addItemValue);