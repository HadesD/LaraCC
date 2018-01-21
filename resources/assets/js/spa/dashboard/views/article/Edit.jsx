import {h} from 'hyperapp';

import site from '../../../commons/site.js';
import dashboard from '../../commons/dashboard.js';

export default (state, actions) => ({match}) => {
  const isNewArticle = (
    match.path === dashboard.root_url + '/articles/new'
  );

  if (isNewArticle)
  {
    document.title = 'Root :: Articles :: New';
  }
  else
  {
    document.title = 'Root :: Articles :: Edit';
  }

  return (
    <section>
      fsfsf
    </section>
  );
};

