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

const appActions = app(
  {
    state,
    actions,
    view: views,
  },
  document.getElementById('app')
);

location.subscribe(appActions.location);

