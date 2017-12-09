import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router
  , Route
  , Link
  , Switch
} from 'react-router-dom';

import {
  Index as HomeIndex
} from './home';

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
          <Route exact path="/" component={HomeIndex}/>
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

