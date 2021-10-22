import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import  ProtectedRouter from "./components/ProtectedRouter"; 
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import {useHistory} from "react-router-dom";

function App() {
  console.log(useHistory());
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact strict path="/" component={Home}></Route>
          <ProtectedRouter component={Profile} path="/profile" strict exact></ProtectedRouter>
          <ProtectedRouter component={Home}></ProtectedRouter>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
