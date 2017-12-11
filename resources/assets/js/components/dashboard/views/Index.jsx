import {
  h
} from 'hyperapp';
import {
  router,
  Link
} from '@hyperapp/router';

export default (state, actions) => {
  return (
    <main>
      <button>ROOT</button>
      <Link to="/root/login" go={actions.router.go}>Login</Link>
    </main>
  );
}

