import {
  h
} from 'hyperapp';
import {
  router,
  Link
} from '@hyperapp/router';

import styles from '../../../../css/dashboard/login.css';

export default (state, actions) => {
  let mainClick = (e, s) => {
    console.log(e);
  };
  let cmdInputChange = (e) => {
    console.log(e)
  };
  console.log(actions);
  console.log(state);
  return (
    <main class={styles.loginMain} onclick={mainClick}>
      <div className="cmd">
        <span>#&nbsp;</span>
        <textarea class={styles.cmdInput} onchange={cmdInputChange}></textarea>
      </div>
      <Link to="/root" go={actions.router.go}>Root</Link>
    </main>
  );
};

