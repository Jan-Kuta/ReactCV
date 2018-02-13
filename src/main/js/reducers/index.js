import { combineReducers } from 'redux';
import CVsReducer from './reducer_cvs';
import ActiveCVReducer from './reducer_active_cv';

const rootReducer = combineReducers({
    CVs: CVsReducer,
    selectedCV: ActiveCVReducer
});

export default rootReducer;