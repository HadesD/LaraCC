import {
  h,
  app
} from 'hyperapp';
import {
  location
} from '@hyperapp/router';

import state from './dashboard/state';
import actions from './dashboard/actions';
import views from './dashboard/views';

const main = app(
  state,
  actions,
  views,
  document.getElementById('app')
);

const unsubscribe = location.subscribe(main.location);

