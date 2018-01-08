import {h} from 'hyperapp';

export default (state) => (pState) => (location) => (actions) => {
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
      <section>

      </section>
  );
};

