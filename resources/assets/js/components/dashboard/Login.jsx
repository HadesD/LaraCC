import {
  h
} from 'hyperapp';
import {
  router,
  Link
} from '@hyperapp/router';

import styles from '../../../css/dashboard/login.css';

export const Login = (state, actions) => {
  return (
    <main className="login-main">
      <input type="text" className="cmd-input" />
      <Link to="/root" go={actions.router.go}>Root</Link>
    </main>
  );
};

