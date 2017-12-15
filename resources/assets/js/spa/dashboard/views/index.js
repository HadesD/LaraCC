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
      <Route path="/root/login" render={Login(state)} />
      <Route path="/root" render={Index(state)} />
    </Switch>
  );
};

