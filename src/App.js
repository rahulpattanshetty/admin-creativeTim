import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import indexRoutes from "./routes/index.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route to={prop.path} component={prop.component} key={key} />;
          })}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
