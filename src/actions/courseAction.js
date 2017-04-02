export function createCourse(course) {
    return { type: 'CREATE_COURSE', course }; // or { type: 'CREATE_COURSE', course } in ES6!
}