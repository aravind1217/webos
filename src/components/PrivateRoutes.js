import React from 'react'
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const PrivateRoute = (props) => {
    const token = JSON.parse(localStorage.getItem("name"));
    return token ? (
      <Route {...props} />
    ) : (
      <Redirect
        to={{
          pathname: "/login"
        }}
      />
    );
  };
  

export default PrivateRoute