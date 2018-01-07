import {
  h
} from 'hyperapp';
import {
  Link,
  Redirect
} from '@hyperapp/router';

import Main from '../components/Main.jsx'

export default (state) => (location) => (actions) => {
  if (!state.isLoggedIn)
  {
    return (
      <Redirect to={state.constants.root + '/login'} />
    );
  }

  document.title = "Root :: Index";

  return (
    <Main state={state} actions={actions}>
      {state.title}
    </Main>
  );
}

