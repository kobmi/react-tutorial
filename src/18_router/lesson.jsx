import React, { Component, Fragment } from "react";

import Header from "../18_router/header/header";
import Footer from "../18_router/footer/footer";

const App = ({ children }) => (
    <Fragment>
        <Header />
        {children}
        <Footer />
    </Fragment>
);

export default App;
