import {
  location
} from '@hyperapp/router';

import indexPage from './indexPage.js';
import loginPage from './loginPage.js';
import articlePage from './articlePage';

export default {
  location: location.actions,
  loginPage,
  indexPage,
  articlePage,
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

