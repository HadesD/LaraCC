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

const CmdInputBox = ({state, actions}) => {
  return (
    <div className="cmd">
      <textarea
        class={styles.cmdInput}
        id={styles.cmdInput}
        onkeydown={actions.loginPage.onKeyDownCmdInput}
        oninput={actions.loginPage.onInputCmdInput}
        onkeyup={actions.loginPage.onKeyUpCmdInput}
        autofocus="true"
        oncreate={(e) => {e.focus();console.log("c")}}
        onupdate={(e) => {e.focus();console.log("u")}}
      />
      <span class={styles.cmdInputShow}>
        {
          state.loginPage.isCmdInputPassword ?
          'Password: ' :
          '# ' + (state.loginPage.cmdInputText || '')
        }
      </span>
      <div class={styles.cmdInputCursor}> </div>
    </div>
  );
};

export default (state) => (location) => (actions) => {
  if (state.isLoggedIn)
  {
    return (
      <Redirect to={state.constants.root} />
    );
  }
  
  state.loginPage.cmdInputId = styles.cmdInput;

  { window.scrollTo(0, document.body.scrollHeight) }
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
        />
      </pre>
    </main>
  );
};

