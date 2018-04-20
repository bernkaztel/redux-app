import {combineReducers} from 'redux';
import coursesReducer from './courseReducers';

const rootReducer = combineReducers({
    coursesReducer: coursesReducer 
});

export default rootReducer;  