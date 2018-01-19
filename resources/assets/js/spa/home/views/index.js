import {h} from 'hyperapp';
import {
  Route,
  Switch
} from '@hyperapp/router';

import Index from './Index.jsx';
import Article from './Article.jsx';
import Login from './Login.jsx';

export default (state, actions) => {
  return (
    <Switch>
      <Route path="/articles/:slug" render={Article(state, actions)} />
      <Route path="/" render={Index(state, actions)} />
      {/* <Route path="/login" render={Login(state)} /> */}
    </Switch>
  );
};

