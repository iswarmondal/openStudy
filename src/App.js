import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import classes from './App.module.css';
import Homepage from './components/Homepage/Homepage';
import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import { Redirect } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import AllMembers from './components/AllMembers/AllMembers';

function App() {
  return (
    <div className={classes["gradient-background"]}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/meeting" exact>
            <AllMembers />
          </Route>
          <Route path="/home" exact>
            <Redirect to="/" />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
    // <div className={classes["gradient-background"]}>
    //   <GroupMembers name={"Ayush"} points={100} />
    // </div>
  );
}

export default App;
