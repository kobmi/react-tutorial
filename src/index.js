import React from "react";
import ReactDOM from "react-dom";

// import Lesson from "./03_state/lesson";
// import Lesson from "./04_props/lesson";
import { Lesson, Counter, Button } from "./05_propTypes/lesson";

ReactDOM.render(
  <Lesson child={<Button />}>
    <Counter />
  </Lesson>,
  document.getElementById("root")
);
