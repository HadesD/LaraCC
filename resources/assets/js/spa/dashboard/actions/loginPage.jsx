export default {
  onMainClick: (state, actions, event) => {
    // console.log('Mouse clicked');
    // console.log(state);
    // console.log(actions);
    document.getElementById(state.loginPage.cmdInputId).focus();
  },
  onInputCmdInput: (state, actions, event) => {
    state.loginPage.cmdInputText = event.target.value.trim();

    // Update DOM
    return (update) => {
      update({});
    }
  },
  onKeyDownCmdInput: (state, actions, event) => {
    switch(event.keyCode)
    {
      case 13:
        state.loginPage.historyCmd.push({
          input: event.target.value.trim(),
          result: actions.loginPage.execCmd(event.target.value.trim()),
        });
        state.loginPage.cmdInputText = event.target.value = null;
        break;
      default:
        break;
    }
  },
  execCmd: (state, actions, cmd) => {
    let result = null;
    let cmdArr = cmd.split(' ');
    let exec = (cmdArr.length === 1) ? cmd : cmdArr[0];
    console.log(exec, cmdArr);

    const loginCall = (cmdArr) => {
      let rs = null;

      if (cmdArr.length <= 2)
      {
        rs = 'ss\nss';
      }
      else
      {

      }

      return rs;
    };

    switch (exec)
    {
      case 'su':
        result = loginCall(cmdArr);
        break;
      default:
        result = 'Command not found: ' + cmd;
        break;
    }

    return (update) => {
      return result;
    };
  },
};

