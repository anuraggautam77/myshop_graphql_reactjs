import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import HistoryPage from '../containers/history';
import AppLayout from '../containers/layout';
import LoginPage from '../containers/login';
import ProfilePage from '../containers/profile';


import "../style/scss/app/index.scss";

class AppShell extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ AppLayout } />
          <Route exact path="/login" component={ LoginPage } />
          <Route exact path="/profile" component={ ProfilePage } />
          <Route exact path="/history" component={ HistoryPage } />
        </Switch>
      </Router>
    );
  }
}

export default AppShell;
