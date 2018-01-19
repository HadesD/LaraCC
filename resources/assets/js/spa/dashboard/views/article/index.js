import {h} from 'hyperapp';
import {
  Route,
  Switch
} from '@hyperapp/router';

import Index from './Index.jsx';
import Edit from './Edit.jsx';

const ArticleRoute = (state, actions) => {
  return (
    <Switch>
      <Route
        path={`${state.constants.root}/articles`}
        render={Index(state, actions)}
      />
      <Route
        path={`${state.constants.root}/articles/new`}
        render={Edit(state, actions)}
      />
      <Route
        path={`${state.constants.root}/articles/:id`}
        render={Edit(state, actions)}
      />
    </Switch>
  );
};

export default ArticleRoute;

