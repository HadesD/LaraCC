import {h} from 'hyperapp';
import {
  Route,
  Switch
} from '@hyperapp/router';

import Index from './Index.jsx';
import Article from './Article.jsx';
import Login from './Login.jsx';

import Main from '../components/Main.jsx';

export default (state, actions) => {
  return (
    <Switch>
      <Main state={state} actions={actions}>
        <Route path="/" render={Index(state, actions)} />
        <Route path="/articles/:slug" render={Article(state, actions)} />
      </Main>
    </Switch>
  );
};

