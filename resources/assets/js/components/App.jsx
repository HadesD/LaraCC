import React from 'react'
import ReactDom from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import {
  DashboardLogin as Login
} from './dashboard/Login.jsx'

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
        <div>
          <Link to="/root/login">About Us (static)</Link>
          <Link to="/login">About Us (static)</Link>

          <Switch>
            <Route path="/root/login" component={ DashboardLogin }/>
          </Switch>
        </div>
      </Router>
    );
  }
}

const DashboardLogin = () => (
  <div>

  </div>
);

// ======================================

ReactDom.render(
  <App />,
  document.getElementById('app')
);

