import {
  h
} from 'hyperapp';
import {
  Route,
  Switch,
  Link
} from '@hyperapp/router';

import Index from './Index.jsx';
import Login from './Login.jsx';

export default (state) => {
  return (
    <Switch>
      <Route path={state.constants.root + '/login'} render={Login(state)} />
      <Route path={state.constants.root} render={Index(state)} />
    </Switch>
  );
};

