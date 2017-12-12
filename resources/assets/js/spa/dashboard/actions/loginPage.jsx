export default {
  onMainClick: (state, actions, event) => {
    // console.log('Mouse clicked');
    // console.log(state);
    // console.log(actions);
    document.getElementById(state.loginPage.cmdInputId).focus();
  },
  onKeyDownCmdInput: (state, actions, event) => {
    switch(event.keyCode)
    {
      case 13:
        actions.loginPage.execCmd(event.target.value.trim());
        state.loginPage.cmdInputText = event.target.value = null;

        // Move scroll
        window.scrollTo(0, document.body.scrollHeight);
        break;
      default:
        break;
    }

    return (update) => {
      update({});
    };
  },
  onInputCmdInput: (state, actions, event) => {
    state.loginPage.cmdInputText = event.target.value;

    // Update DOM
    return (update) => {
      update({});
    }
  },
  onKeyUpCmdInput: (state, actions, event) => {
    switch(event.keyCode)
    {
      case 13:
        state.loginPage.cmdInputText = event.target.value = null;
        break;
      default:
        break;
    }

    return (update) => {
      update({});
    };
  },
  execCmd: (state, actions, cmd) => {
    return (update) => {
      state.loginPage.historyCmd.push(
        '# ' + cmd,
      );
      update({});

      let result = null;
      let cmdArr = cmd.split(' ');
      let exec = (cmdArr.length === 1) ? cmd : cmdArr[0];

      console.log(exec, cmdArr);

      const loginCall = (cmdArr) => {

        return cmdArr;
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

      state.loginPage.historyCmd.push(result);
    };
  },
};

