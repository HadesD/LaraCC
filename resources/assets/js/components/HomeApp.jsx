import { h, app } from 'hyperapp';
import { router, Link } from '@hyperapp/router';

import {
  Index as HomeIndex,
  Login
} from './home';

app(
  {
    view: [
      ['/', HomeIndex],
      ['/login', Login],
    ],
    mixins: [router()],
    root: document.getElementById('app')
  }
);

