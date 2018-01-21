import {h} from 'hyperapp';
import {
  Route,
  Switch
} from '@hyperapp/router';

import Index from './Index.jsx';
import Edit from './Edit.jsx';

const ArticleRoute = (state, actions) => ({match}) => {
  return (
    <Switch>
      <Route
        path={`${match.path}/`}
        render={Index(state, actions)}
      />
      <Route
        path={`${match.path}/new`}
        render={Edit(state, actions)}
      />
      <Route
        path={`${match.path}/:id`}
        render={Edit(state, actions)}
      />
    </Switch>
  );
};

export default ArticleRoute;

