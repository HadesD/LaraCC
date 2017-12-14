const execCmd = (cmd) => {
  state.loginPage.historyCmd.push(
    '# ' + (cmd || ''),
  );

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
    state.loginPage.historyCmd.push(result || '');
  }
}

export default {
  onMainClick: (event) => (state) => (actions) => {
    // console.log('Mouse clicked');
    console.log(state);
    console.log(actions);
    document.getElementById(state.loginPage.cmdInputId).focus();
  },
  onKeyDownCmdInput: (event) => (state) => (actions) => {
    console.log(state);
    switch(event.keyCode)
    {
      case 13:
        execCmd(event.target.value);
        state.loginPage.cmdInputText = event.target.value = null;

        // Move scroll
        window.scrollTo(0, document.body.scrollHeight);
        break;
      default:
        break;
    }

    return ({
      loginPage: state.loginPage
    });
  },
  onInputCmdInput: (event) => (state) => (actions) => {
    state.loginPage.cmdInputText = event.target.value;

    return ({
      loginPage: state.loginPage
    });
  },
  onKeyUpCmdInput: (event) => (state) => (actions) => {
    switch(event.keyCode)
    {
      case 13:
        state.loginPage.cmdInputText = event.target.value = null;
        break;
      default:
        break;
    }
  },
};

