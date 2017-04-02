import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseAction';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: "" }
        };

        this.onTitleChange = this.onTitleChange.bind(this); // fix this in callback
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({
            course: course
        });
    }

    onClickSave() {
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>
                    Courses
                </h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange} // this.onTitleChange.bind(this) -> bad for performance, bind in render() triggers rerenders
                    value={this.state.course.title}
                />
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave}
                />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses // compare to rootReducer in reducers/index.js naming
    };
}
// 
// function mapDispatchToProps() {
//     what actions do we want to expose from this component
//}

export default connect(mapStateToProps /*, mapDispatchToProps */)(CoursesPage); // omitting 'mapDispatchToProps' attaches a dispatch function