import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// import Lesson from "./03_state/lesson";
// ReactDOM.render(<Lesson />, document.getElementById("root"));

// import Lesson from "./04_props/lesson";
// ReactDOM.render(<Lesson />, document.getElementById("root"));

// import { Lesson, Counter, Button } from "./05_propTypes/lesson";
// ReactDOM.render(
//   <Lesson child={<Button />}>
//     <Counter />
//   </Lesson>,
//   document.getElementById("root")
// );

// import App from "./06_events/lesson";
// ReactDOM.render(<App />, document.getElementById("root"));

// import App from "./07_conditional_rendering/lesson";
// ReactDOM.render(<App />, document.getElementById("root"));

// import App from "./08_lists_keys/lesson";
// ReactDOM.render(<App />, document.getElementById("root"));

// import App from "./09_fragment_and_css/table";
// ReactDOM.render(<App />, document.getElementById("root"));

// import App from "./10_form/lesson";
// ReactDOM.render(<App />, document.getElementById("root"));

// import Lesson from "./12_hoc/lesson";
// ReactDOM.render(<Lesson />, document.getElementById("root"));

// import News from "./16_api_1/containers/news/news";
// ReactDOM.render(<News />, document.getElementById("root"));

import App from "./18_router/lesson";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./18_router/home/home";
import Contacts from "./18_router/contacts/contacts";
import Posts from "./18_router/posts/posts";
import Post from "./18_router/post/post";
import Error from "./18_router/error/error";

ReactDOM.render(
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contacts" component={Contacts} />
                <Route exact path="/posts" component={Posts} />
                <Route path="/posts/:id" component={Post} />
                <Route path="*" component={Error} />
            </Switch>
        </App>
    </Router>,
    document.getElementById("root")
);
