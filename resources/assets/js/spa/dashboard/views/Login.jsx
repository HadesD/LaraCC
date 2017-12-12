import {
  h
} from 'hyperapp';
import {
  router,
  Link
} from '@hyperapp/router';

import styles from '../../../../sass/dashboard/login.scss';

const HistoryCmd = ({state, actions}) => {
  return (
    <div>
      {state.loginPage.historyCmd.map(e => {
        return (
          <div>
            Executing: {e.input}
            <br />
            {e.result}
          </div>
        );
      })}
    </div>
  );
};

const CmdInputBox = ({text, actions}) => {
  return (
    <div className="cmd">
      <textarea class={styles.cmdInput} id={styles.cmdInput} oninput={actions.loginPage.onInputCmdInput} onkeydown={actions.loginPage.onKeyDownCmdInput}></textarea>
      <span class={styles.cmdInputShow}>#&nbsp;{text}</span>
      <div class={styles.cmdInputCursor}> </div>
    </div>
  );
};

export default (state, actions) => {
  state.loginPage.cmdInputId = styles.cmdInput;

  return (
    <main class={styles.loginMain} onclick={actions.loginPage.onMainClick}>
      <pre>
        <HistoryCmd
          state={state}
          actions={actions}
        />
        <CmdInputBox
          text={state.loginPage.cmdInputText}
          actions={actions}
        />
      </pre>
      <Link to="/root" go={actions.router.go}>Root</Link>
    </main>
  );
};

