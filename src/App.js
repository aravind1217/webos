import React from "react"
import PrivateRoute from "./components/PrivateRoutes";
import AddData from "./components/AddData";
import {Container} from 'react-bootstrap'
import Signup from './components/Signup'

import Login from './components/Login';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
  >
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Router>
      
          <Switch>
            <Route exact path="/add" component={AddData} />
          
            <Route path="/signup" component={Signup} />
            <Route path="/" component={Login} />
           
          </Switch>
       
      </Router>
    </div>
  </Container>
  );
}

export default App;
