import {
  location
} from '@hyperapp/router';

import indexPage from './indexPage';
import loginPage from './loginPage';
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

