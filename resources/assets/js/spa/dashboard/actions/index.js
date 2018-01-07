import {
  location
} from '@hyperapp/router';

import indexPage from './indexPage.js';
import loginPage from './loginPage.js';

export default {
  location: location.actions,
  loginPage: loginPage,
  indexPage: indexPage,
  sidebarToggle: (event) => (state) => {
    return {
      isSidebarOpenned: !state.isSidebarOpenned
    };
  },
  searchPanelToggle: (event) => (state) => {
    return {
      isSearchPanelOpenned: !state.isSearchPanelOpenned
    }
  },
};

