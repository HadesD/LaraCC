import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router
  , Route
  , Link
  , Switch
} from 'react-router-dom';

import {
  Login
  , Index
} from './dashboard';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <Router>
        <Switch>
          <Route exact path="/root" component={DashboardIndex}/>
          <Route exact path="/root/login" component={DashboardLogin}/>
        </Switch>
      </Router>
    );
  }
}

// ======================================

ReactDom.render(
  <App />
  , document.getElementById('app')
);

