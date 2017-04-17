import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
    courses,  // e.g. courseReducer -> refernce by this.state.courseReducer in Components
    authors
});

export default rootReducer;