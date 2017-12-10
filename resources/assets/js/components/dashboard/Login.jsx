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
    <main className={styles.loginMain} onClick={() => {console.log(11)}}>
      <div className="cmd">
        <span>#&nbsp;</span>
        <textarea className={styles.cmdInput}></textarea>
      </div>
      <Link to="/root" go={actions.router.go}>Root</Link>
    </main>
  );
};

