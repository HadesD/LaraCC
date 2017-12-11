import {
  app
} from 'hyperapp';
import {
  router
} from '@hyperapp/router';

import state from './state';
import actions from './actions';
import views from './views';

app({
  state,
  actions,
  view: views,
  mixins: [router()],
  root: document.getElementById('app')
});

