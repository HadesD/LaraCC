import {
  location
} from '@hyperapp/router'

import loginPage from './loginPage';
import indexPage from './indexPage';

export default {
  location: location.actions,
  loginPage,
  indexPage,
};

