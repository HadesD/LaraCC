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
          let rs = null;

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
    // console.log('Mouse clicked');
    // console.log(state);
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

        // Move scroll
        window.scrollTo(0, document.body.scrollHeight);
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

