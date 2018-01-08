import {
  h
} from 'hyperapp';
import {
  Link,
  Redirect
} from '@hyperapp/router';

export default (state) => (location) => (actions) => {
  document.title = "Root :: Index";

  return (
    <div>
      {state.title}
    </div>
  );
}

