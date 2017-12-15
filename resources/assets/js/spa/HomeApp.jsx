import {
  h,
  app
} from 'hyperapp';
import {
  location
} from '@hyperapp/router';

import state from './home/state';
import actions from './home/actions';
import views from './home/views';

const appActions = app(
  {
    state,
    actions,
    view: views,
  },
  document.getElementById('app')
);

location.subscribe(appActions.location);

