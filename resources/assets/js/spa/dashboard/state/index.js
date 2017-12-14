import {
  location
} from '@hyperapp/router';

import constants from './constants.js';

export default {
  location: location.state,

  constants: constants,

  title: null,

  isLoggedIn: false,

  loginPage: {
    cmdInputId: null,
    historyCmd: [],
    cmdInputText: null,
  },
};

