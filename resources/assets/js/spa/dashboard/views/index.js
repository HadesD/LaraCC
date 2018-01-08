import {h} from 'hyperapp';
import {
  Route,
  Switch,
  Link
} from '@hyperapp/router';

import Login from './Login.jsx';
import Index from './Index.jsx';

import {
  Index as ArticleIndex,
  Edit as ArticleEdit
} from './article/*';

export default (state, actions) => {
  return (
    <Switch>
      <Route path={`${state.constants.root}/login`} render={Login(state)} />
      <Route
        path={`${state.constants.root}/articles`}
        render={ArticleIndex(state)}
      />
      <Route
        path={`${state.constants.root}/articles/new`}
        render={ArticleEdit(state)}
      />
      <Route
        path={`${state.constants.root}/articles/:id/edit`}
        render={ArticleEdit(state)}
      />
      <Route path={state.constants.root} render={Index(state)} />
    </Switch>
  );
};

