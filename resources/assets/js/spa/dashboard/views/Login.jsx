import {
  h
} from 'hyperapp';
import {
  Link,
  Redirect
} from '@hyperapp/router';

import styles from '../../../../sass/dashboard/login.scss';

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
      <textarea
        class={styles.cmdInput}
        id={styles.cmdInput}
        onkeydown={actions.loginPage.onKeyDownCmdInput(state)(actions)}
        oninput={actions.loginPage.onInputCmdInput(state)(actions)}
        onkeyup={actions.loginPage.onKeyUpCmdInput(state)(actions)}
        autofocus="true"
      />
      <span class={styles.cmdInputShow}>#&nbsp;{text}</span>
      <div class={styles.cmdInputCursor}> </div>
    </div>
  );
};

export const Login = (state) => (actions) => (props) => {
  state.loginPage.cmdInputId = styles.cmdInput;
  // return (
  //   <Redirect to="/root" />
  // );

  return (
    <main class={styles.loginMain} onclick={actions.loginPage.onMainClick(state)(actions)}>
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

