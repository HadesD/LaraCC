import {
  h
} from 'hyperapp';
import {
  Link,
  Redirect
} from '@hyperapp/router';

import Main from '../components/Main.jsx'

export default (state) => (actions) => (props) => {
  if (!state.isLoggedIn)
  {
    return (
      <Redirect to={state.constants.root + '/login'} />
    );
  }
  
  return (
    <main>
      {state.title}
      <Link to="/root/login">Login</Link>
    </main>
  );
}

