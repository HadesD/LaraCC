import { h, app } from 'hyperapp';
import { router, Link } from '@hyperapp/router';

import {
  Index as DashboardIndex,
  Login
} from './dashboard';

app(
  {
    view: [
      ['/root', () => <DashboardIndex />],
      ['/root/login', () => <Login />],
    ],
    mixins: [router()],
    root: document.getElementById('app')
  }
);

