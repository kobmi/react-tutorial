import React, { Fragment } from "react";
import "./table.css";

const App = () => {
  return <Table />;
};

const Sergey = () => {
  return (
    <>
      <td>Sergey</td>
      <td>Kolesnichenko</td>
      <td>30</td>
    </>
  );
};
const Maria = () => (
  <Fragment>
    <td>Maria</td>
    <td>Numseva</td>
    <td>28</td>
  </Fragment>
);

const Table = () => {
  const style = { textAlign: "center" };

  return (
    <table border={1} style={style}>
      <tbody>
        <tr>
          <th>First name</th>
          <th>Last Name</th>
          <th>Age</th>
        </tr>
        <tr style={{ color: "red" }}>
          <Sergey />
        </tr>
        <tr className="maria">
          <Maria />
        </tr>
      </tbody>
    </table>
  );
};

export default App;
