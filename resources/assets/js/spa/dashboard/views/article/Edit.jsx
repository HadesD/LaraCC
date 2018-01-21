import {h} from 'hyperapp';

export default (state, actions) => ({match}) => {
  const isNewArticle = (
    match.path === state.constants.root + '/articles/new'
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

