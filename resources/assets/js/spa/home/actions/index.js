import {
  location
} from '@hyperapp/router';

import homePage from './homePage.js';
import articlePage from './articlePage.js';

export default {
  location: location.actions,
  homePage,
  articlePage,
};

