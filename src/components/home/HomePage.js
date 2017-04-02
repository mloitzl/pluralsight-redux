import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>React and Redux Administration</h1>
                <p>React, Redux and React Router in ES6 for ultra-responsive webapps.</p>
                <Link to="about" className="btn btn-primary btn-large">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;