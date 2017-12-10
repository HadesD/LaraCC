import {
  h,
  app
} from 'hyperapp';
import {
  router
} from '@hyperapp/router';

import {
  Index as DashboardIndex,
  Login
} from './dashboard/index.js';

app(
  {
    state: {},
    actions: {},
    view: [
      ['/root', DashboardIndex],
      ['/root/login', Login],
    ],
    mixins: [router()],
    root: document.getElementById('app')
  }
);
