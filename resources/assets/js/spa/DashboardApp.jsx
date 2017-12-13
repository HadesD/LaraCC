import {
  h,
  app
} from 'hyperapp';
import {
  location,
  Route,
  Switch,
  Link
} from '@hyperapp/router';

import state from './dashboard/state';
import actions from './dashboard/actions';

import {
  Index,
  Login
} from './dashboard/views';

const LoginI = () => {
  return (
    <div>
      <Link to="/root">ff</Link>
    </div>
  );
}
const LoginI1 = () => {
  return (
    <div>
      <Link to="/root/login">fff</Link>
    </div>
  );
}

const appActions = app(
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

location.subscribe(appActions.location);

