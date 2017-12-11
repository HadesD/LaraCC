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
        console.log(event.target.value.length);
        state.loginPage.historyCmd.push({
          input: event.target.value,
          result: 'Command not found',
        });
        state.loginPage.cmdInputText = event.target.value = null;
        break;
      default:
        state.loginPage.cmdInputText = event.target.value.trim();
    }

    // Update DOM
    return (update) => {
      update({});
    }
  },
  onKeyUpCmdInput: (state, actions, event) => {
    state.loginPage.cmdInputText = event.target.value.trim();

    return (update) => {
      update({});
    }
  }
};

