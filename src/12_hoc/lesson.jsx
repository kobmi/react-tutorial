import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const AppLink = (props) => {
    return <Link {...props} className="active"></Link>;
};

class Lesson extends Component {
    render() {
        return (
            <Router>
                <nav>
                    <AppLink to="/">Home</AppLink>
                    <AppLink to="/contacts">Cotacts</AppLink>
                    <AppLink to="/about">About</AppLink>
                </nav>
            </Router>
        );
    }
}

export default Lesson;
