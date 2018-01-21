import {
  app
} from 'hyperapp';
import {
  location
} from '@hyperapp/router';

import state from './home/state';
import actions from './home/actions';
import views from './home/views';

const main = app(
  state,
  actions,
  views,
  document.getElementById('app')
);

const unsubscribe = location.subscribe(main.location);

