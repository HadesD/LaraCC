import {
  h
} from 'hyperapp';
import {
  Link,
  Redirect
} from '@hyperapp/router';

import Main from '../components/Main.jsx'

export default (state) => (location) => (actions) => {
  document.title = "Root :: Index";

  return (
    <Main state={state} actions={actions}>
      {state.title}
    </Main>
  );
}

