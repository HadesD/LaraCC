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
            {e}
          </div>
        );
      })}
    </div>
  );
};

const CmdInputBox = ({text, actions}) => {
  let time = (new Date()).getTime();
  return (
    <div className="cmd">
      {/* {time} */}
      <textarea class={styles.cmdInput} id={styles.cmdInput} onkeydown={actions.loginPage.onKeyDownCmdInput} oninput={actions.loginPage.onInputCmdInput} onkeyup={actions.loginPage.onKeyUpCmdInput} autofocus="true"></textarea>
      <span class={styles.cmdInputShow}>#&nbsp;{text}</span>
      <div class={styles.cmdInputCursor}> </div>
    </div>
  );
};

export default (state, actions) => {
  state.loginPage.cmdInputId = styles.cmdInput;

  return (
    <main class={styles.loginMain} onclick={actions.loginPage.onMainClick}>
      <div>
        <pre>
          ╭━━━╮╱╱╱╱╭╮╱╱╭╮╱╭╮╱╱╱╱╭╮<br />
          ╰╮╭╮┃╱╱╱╱┃┃╱╱┃┃╱┃┃╱╱╱╱┃┃<br />
          ╱┃┃┃┣━━┳━┫┃╭╮┃╰━╯┣━━┳━╯┣━━┳━━╮<br />
          ╱┃┃┃┃╭╮┃╭┫╰╯╯┃╭━╮┃╭╮┃╭╮┃┃━┫━━┫<br />
          ╭╯╰╯┃╭╮┃┃┃╭╮┳┫┃╱┃┃╭╮┃╰╯┃┃━╋━━┃<br />
          ╰━━━┻╯╰┻╯╰╯╰┻┻╯╱╰┻╯╰┻━━┻━━┻━━╯
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
          text={state.loginPage.cmdInputText}
          actions={actions}
        />
      </pre>
      <Link to="/root" go={actions.router.go}>Root</Link>
    </main>
  );
};

