import {
  h
} from 'hyperapp';
import {
  Route,
  Switch,
  Link
} from '@hyperapp/router';

import Index from './Index.jsx';
import Article from './Article.jsx';
import Login from './Login.jsx';

export default (state) => {
  return (
    <Switch>
      <Route path="/" render={Index(state)} />
      <Route path="/articles/:slug" render={Article(state)} />
      <Route path="/login" render={Login(state)} />
    </Switch>
  );
};

