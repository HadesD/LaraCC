import {
  location
} from '@hyperapp/router';

import articlePage from './articlePage.js';
import loginPage from './loginPage.js';

export default {
  location: location.state,

  title: null,

  isLoggedIn:
   true,
   // false,

  isSidebarOpenned: true,

  isSearchPanelOpenned: false,

  loginPage,

  articlePage,
};

