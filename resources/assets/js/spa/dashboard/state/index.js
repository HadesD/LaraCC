import {
  location
} from '@hyperapp/router';

import constants from './constants.js';

export default {
  location: location.state,

  constants: constants,

  title: null,

  isLoggedIn:
  true,
  // false,

  isSidebarOpenned: true,

  isSearchPanelOpenned: false,

  loginPage: {
    isCmdInputPassword: false, // Input is a password
    cmdInputId: null,
    historyCmd: [],
    cmdInputText: null,
    usernameInput: null,
  },

  articlePage: {
    articlesInfo: [],
  },
};

