import {
  location
} from '@hyperapp/router';

export default {
  location: location.state,

  title: null,

  isLoggedIn: false,

  loginPage: {
    cmdInputId: null,
    historyCmd: [],
    cmdInputText: null,
  },
};
