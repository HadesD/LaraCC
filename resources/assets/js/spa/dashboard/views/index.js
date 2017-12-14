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

export default (state) => (actions) => {
  return (
    <Switch>
      <Route path="/root/login" render={Login(state, actions)} />
      <Route path="/root" render={Index(state)(actions)} />
    </Switch>
  );
};

// export * from './Index.jsx';
// export * from './Login.jsx';

