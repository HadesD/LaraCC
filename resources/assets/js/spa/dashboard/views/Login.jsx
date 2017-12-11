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
            {e.input}
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
      <span>#&nbsp;{text}</span>
      <textarea class={styles.cmdInput} id={styles.cmdInput} onkeydown={actions.loginPage.onKeyDownCmdInput} onkeyup={actions.loginPage.onKeyUpCmdInput}></textarea>
    </div>
  );
};

export default (state, actions) => {
  state.loginPage.cmdInputId = styles.cmdInput;

  return (
    <main class={styles.loginMain} onclick={actions.loginPage.onMainClick}>
      <HistoryCmd
        state={state}
        actions={actions}
      />
      <CmdInputBox
        text={state.loginPage.cmdInputText}
        actions={actions}
      />
      <Link to="/root" go={actions.router.go}>Root</Link>
    </main>
  );
};

