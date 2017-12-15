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
      {/* {console.log(state)} */}
      <Route path="/" render={Login(state)} />
      <Route path="/login" render={Index(state)} />
    </Switch>
  );
};

