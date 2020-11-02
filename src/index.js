import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/js/bootstrap.js';


import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import InputField from "./register";
import Login from "./login";
// import { Login } from "./login";

const App = () => {
  return (
    <Router>
      <Route path="/register" component={InputField} />
      <Route path="/login" component={Login} />
    </Router>
  );
};

const RootElement = document.querySelector("#root");
ReactDOM.render(<App />, RootElement);
