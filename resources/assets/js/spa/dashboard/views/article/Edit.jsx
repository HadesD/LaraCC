import {h} from 'hyperapp';

import Main from '../../components/Main.jsx'

export default (state) => (location) => (actions) => {
  const isNewArticle = (
    state.location.pathname === state.constants.root + '/articles/new'
  );

  if (isNewArticle)
  {
    document.title = 'Root :: Articles :: New';
  }
  else
  {
    document.title = 'Root :: Articles :: Edit';
    console.log(location)
  }

  return (
    <Main state={state} actions={actions}>
      <section>

      </section>
    </Main>
  );
};

