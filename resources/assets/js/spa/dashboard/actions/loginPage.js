import axios from 'axios';
import constants from '../state/constants.js';

const execCmd = (cmd) => {
  let trimCmd = cmd.trim();

  let cmdArr = trimCmd.split(' ');
  let exec = (cmdArr.length === 1) ? trimCmd : cmdArr[0];

  if (exec.length > 0)
  {
    const cmdList = [
      {
        exec: 'help',
        callBack: (cmdArr) => {
          let rs = null;
          for (let i = 0; i < cmdList.length; i++)
          {
          }

          return rs;
        },
      },
      {
        exec: 'su',
        callBack: (cmdArr) => {

          if ((cmdArr.length !== 3) || (cmdArr[1] !== '-'))
          {
            return 'Must be "su - <username>"';
          }

          let rs = null;

          axios.post(constants.api + '/root/login', {
            params: {
              username: cmdArr[2],
            }
          })
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            })
          ;
          return rs;
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
    return result || '';
  }
};

export default {
  onMainClick: (event) => (state) => (actions) => {
    // console.log(actions);
    document.getElementById(state.cmdInputId).focus();
  },
  onKeyDownCmdInput: (event) => (state) => (actions) => {
    switch(event.keyCode)
    {
      case 13:
        state.historyCmd.push(
          '# ' + event.target.value
        );
        state.historyCmd.push(
          execCmd(event.target.value)
        );
        state.cmdInputText = event.target.value = null;
        break;
      default:
        break;
    }

    return ({
    });
  },
  onInputCmdInput: (event) => (state) => (actions) => {
    state.cmdInputText = event.target.value;

    return ({
    });
  },
  onKeyUpCmdInput: (event) => (state) => (actions) => {
    switch(event.keyCode)
    {
      case 13:
        state.cmdInputText = event.target.value = null;
        break;
      default:
        break;
    }

    return ({
    });
  },
};

