import {
  h,
  app
} from 'hyperapp';
import {
  location,
  Route,
  Switch
} from '@hyperapp/router';

import state from './dashboard/state';
import actions from './dashboard/actions';
// import views from './views';

import {
  Index,
  Login
} from './dashboard/views';

/* const appActions =  */app(
  {
    state,
    actions,
    view: (state) => {
      return (
        <Switch>
          <Route path="/root/login" render={Login(state)(actions)} />
          <Route path="/root" render={Index(state)(actions)} />
        </Switch>
      );
    },
  },
  document.getElementById('app')
);

// location.subscribe(appActions.location);

