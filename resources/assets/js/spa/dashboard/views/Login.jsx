import {
  h
} from 'hyperapp';
import {
  Link,
  Redirect
} from '@hyperapp/router';

import styles from '../../../../sass/dashboard/login.scss';

import actions from '../actions';
import state from '../state';

const HistoryCmd = ({state, actions}) => {
  return (
    <div>
      {state.loginPage.historyCmd.map(e => {
        return (
          <div>
            {e}
          </div>
        );
      })}
    </div>
  );
};

const CmdInputBox = ({state, actions, text}) => {
  return (
    <div className="cmd">
      {state.title}
      <textarea
        class={styles.cmdInput}
        id={styles.cmdInput}
        onkeydown={actions.loginPage.onKeyDownCmdInput}
        oninput={actions.loginPage.onInputCmdInput}
        onkeyup={actions.loginPage.onKeyUpCmdInput}
        autofocus="true"
      />
      <span class={styles.cmdInputShow}>#&nbsp;{text}</span>
      <div class={styles.cmdInputCursor}> </div>
    </div>
  );
};

export default () => {
  console.log(state, actions);
  state.loginPage.cmdInputId = styles.cmdInput;

  return (
    <main
      class={styles.loginMain}
      onclick={actions.loginPage.onMainClick}
    >
      <div>
        <pre>
          {
            `
          ╭━━━╮╱╱╱╱╭╮╱╱╭╮╱╭╮╱╱╱╱╭╮
          ╰╮╭╮┃╱╱╱╱┃┃╱╱┃┃╱┃┃╱╱╱╱┃┃
          ╱┃┃┃┣━━┳━┫┃╭╮┃╰━╯┣━━┳━╯┣━━┳━━╮
          ╱┃┃┃┃╭╮┃╭┫╰╯╯┃╭━╮┃╭╮┃╭╮┃┃━┫━━┫
          ╭╯╰╯┃╭╮┃┃┃╭╮┳┫┃╱┃┃╭╮┃╰╯┃┃━╋━━┃
          ╰━━━┻╯╰┻╯╰╯╰┻┻╯╱╰┻╯╰┻━━┻━━┻━━╯
            `
          }
        </pre>
        Welcome to Root Manager!
        <br />
        Type 'help' for help
      </div>
      <pre>
        <HistoryCmd
          state={state}
          actions={actions}
        />
        <CmdInputBox
          state={state}
          actions={actions}
          text={state.loginPage.cmdInputText}
        />
      </pre>
      <Link to="/root">Root</Link>
    </main>
  );
};

