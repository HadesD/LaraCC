import {h} from 'hyperapp';
import {
  Route,
  Switch
} from '@hyperapp/router';

import dashboard from '../commons/dashboard.js';

import Login from './Login.jsx';
import Index from './Index.jsx';

import Main from '../components/Main.jsx';

import ArticleRoute from './article';

const MainRoute = (state, actions) => ({match}) => {
  return (
    <Main state={state} actions={actions}>
      <Route
        path={match.path}
        render={Index(state, actions)}
      />
      <Route
        parent
        path={`${match.path}/articles`}
        render={ArticleRoute(state, actions)}
      />
    </Main>
  );
};

export default (state, actions) => {
  if (!state.isLoggedIn)
  {
    return (
      <Route
        parent
        path={dashboard.root_url}
        render={Login(state, actions)}
      />
    );
  }

  return (
    <Route
      parent
      path={dashboard.root_url}
      render={MainRoute(state, actions)}
    />
  );
};

