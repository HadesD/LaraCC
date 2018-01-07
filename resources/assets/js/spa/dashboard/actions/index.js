import {
  location
} from '@hyperapp/router';

import indexPage from './indexPage.js';
import loginPage from './loginPage.js';
import articlePage from './articlePage.js';

export default {
  location: location.actions,
  loginPage: loginPage,
  indexPage: indexPage,
  articlePage: articlePage,
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

