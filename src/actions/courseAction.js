import * as types from './actionTypes';

export function createCourse(course) {
    return { type: types.CREATE_COURSE, course }; // or { type: 'CREATE_COURSE', course } in ES6!
}