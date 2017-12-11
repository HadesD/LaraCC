export default {
  onMainClick: (state, actions, event) => {
    // console.log('Mouse clicked');
    // console.log(state);
    // console.log(actions);
    document.getElementById(state.loginPage.cmdInputId).focus();
  },
  onCmdInputKeyDown: (state, actions, event) => {
    switch(event.keyCode)
    {
      case 13:
        state.loginPage.historyCmd.push({
          input: event.target.value,
          result: '',
        });
        state.loginPage.cmdInputText = event.target.value = null;
        console.log(event);
        break;
      default:
        state.loginPage.cmdInputText = event.target.value;
    }

    // Update DOM
    return (update) => {
      update({});
    }
  }
};

