import {h} from 'hyperapp';

export default (state, actions) => (pState) => (location) => {
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
  }

  return (
    <section>

    </section>
  );
};

