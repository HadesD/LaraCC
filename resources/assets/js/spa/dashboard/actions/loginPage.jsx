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
          input: event.target.value,
          result: 'Command not found',
        });
        state.loginPage.cmdInputText = event.target.value = null;
        break;
      default:
        break;
    }
  }
};

