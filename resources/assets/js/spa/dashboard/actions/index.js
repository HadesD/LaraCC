import {
  location
} from '@hyperapp/router'

import indexPage from './indexPage';

export default {
  location: location.actions,
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

    return (
      state => state
    );
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
  indexPage,
};

