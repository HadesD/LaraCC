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
      {state.title}
      <textarea
        class={styles.cmdInput}
        id={styles.cmdInput}
        onkeydown={actions.onKeyDownCmdInput}
        oninput={actions.onInputCmdInput}
        onkeyup={actions.onKeyUpCmdInput}
        autofocus="true"
      />
      <span class={styles.cmdInputShow}>#&nbsp;{text}</span>
      <div class={styles.cmdInputCursor}> </div>
    </div>
  );
};

export default (state, actions) => (props) => {
  console.log(state, actions);
  state.loginPage.cmdInputId = styles.cmdInput;

  return (
    <main
      class={styles.loginMain}
      onclick={actions.onMainClick}
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
          text={state.cmdInputText}
        />
      </pre>
      <Link to="/root">Root</Link>
    </main>
  );
};

