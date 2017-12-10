import {
  h
} from 'hyperapp';
import {
  router,
  Link
} from '@hyperapp/router';

import styles from '../../../css/dashboard/login.css';

export const Login = (state, actions) => {
  let mainClick = (e, s) => {
    console.log(e);
  };
  return (
    <main class={styles.loginMain} onclick={mainClick}>
      <div className="cmd">
        <span>#&nbsp;</span>
        <textarea class={styles.cmdInput}></textarea>
      </div>
      <Link to="/root" go={actions.router.go}>Root</Link>
    </main>
  );
};

