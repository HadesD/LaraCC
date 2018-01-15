import {
  h
} from 'hyperapp';
import {
  Link,
  Redirect
} from '@hyperapp/router';

export default (state, actions) => (location) => {
  document.title = "Root :: Index";

  return (
    <div>
      {state.title}
    </div>
  );
}

