import {h} from 'hyperapp';
import {
  Route,
  Switch
} from '@hyperapp/router';

import Login from './Login.jsx';
import Index from './Index.jsx';

import Main from '../components/Main.jsx'

import ArticleRoute from './article';

const MainRoute = (state, actions) => ({match}) => {
  return (
    <Main state={state} actions={actions}>
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
        path={state.constants.root}
        render={Login(state, actions)}
      />
    );
  }

  return (
    <Route
      parent
      path={state.constants.root}
      render={MainRoute(state, actions)}
    />
  );
};

