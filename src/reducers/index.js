import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses  // e.g. courseReducer -> refernce by this.state.courseReducer in Components
});

export default rootReducer;