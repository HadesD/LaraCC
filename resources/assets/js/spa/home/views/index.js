import {h} from 'hyperapp';
import {
  Route,
  Switch
} from '@hyperapp/router';

import Index from './Index.jsx';
import Article from './Article.jsx';
import Login from './Login.jsx';

export default (state, actions) => {
  console.log(Index)
  return (
    <Switch>
      <Route path="/" render={Index} />
    </Switch>
  );
};

