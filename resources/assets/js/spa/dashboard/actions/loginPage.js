import axios from 'axios';
import constants from '../state/constants.js';

const execCmd = (cmd) => (state, actions) => {
  let trimCmd = cmd.trim();

  let cmdArr = trimCmd.split(' ');
  let exec = (cmdArr.length === 1) ? trimCmd : cmdArr[0];

  if (state.isCmdInputPassword)
  {
    exec = 'su';
  }
  else
  {
    state.historyCmd.push(
      '# ' + event.target.value
    );
  }

  if (exec.length > 0)
  {
    const cmdList = [
      {
        exec: 'help',
        callBack: (cmdArr) => {
          let rs = null;
          for (let i = 0; i < cmdList.length; i++)
          {
            state.historyCmd.push(
              cmdList[i].exec
            );
          }

          return rs;
        },
      },
      {
        exec: 'su',
        callBack: (cmdArr) => {
          let rs = null;

          if (state.isCmdInputPassword)
          {
            state.isCmdInputPassword = false;
            state.historyCmd.push(
              'Trying to login...'
            );

            axios({
              method: 'POST',
              url: constants.api + '/root/login',
              params: {
                username: state.usernameInput,
                password: cmdArr[0],
              }
            })
              .then((response) => {
                setTimeout(
                  () => {
                    state.historyCmd.push(
                      "sdfsdf"
                      // response.data
                    );
                    actions.update();
                  }
                  ,1000);
              })
              .catch((error) => {
                state.historyCmd.push(
                  error.message
                );
              })
            ;
          }
          else
          {
            if ((cmdArr.length !== 3) || (cmdArr[1] !== '-'))
            {
              return 'Must be "su - <username>"';
            }

            state.usernameInput = cmdArr[2];
            state.isCmdInputPassword = true;
          }

          return rs;
        },
      },
      {
        exec: 'clear',
        callBack: (cmdArr) => {
          state.historyCmd = [];
        },
      },
    ];

    let findCmd = cmdList.find(findCmd => (
      (findCmd.exec === exec) && (findCmd.callBack != undefined)
    ));

    let result = null;

    if (findCmd === undefined)
    {
      result = 'Command not found: ' + cmd;
    }
    else
    {
      result = findCmd.callBack(cmdArr);
    }
    return result;
  }
};

export default {
  onMainClick: (event) => (state) => {
    document.getElementById(state.cmdInputId).focus();
  },
  onKeyDownCmdInput: (event) => (state, actions) => {
    switch (event.keyCode)
    {
      case 13:
        state.historyCmd.push(
          execCmd(event.target.value)(state, actions) || ''
        );
        state.cmdInputText = event.target.value = null;
        return {};
        break;
      default:
        break;
    }

  },
  onInputCmdInput: (event) => (state) => {
    state.cmdInputText = event.target.value;

    return {};
  },
  onKeyUpCmdInput: (event) => (state) => {
    switch(event.keyCode)
    {
      case 13:
        state.cmdInputText = event.target.value = null;
        return ({
        });
        break;
      default:
        break;
    }
  },
  update: () => {return ({})},
};

