import {h} from 'hyperapp';
import {
  Link,
  Redirect
} from '@hyperapp/router';

import Main from '../../components/Main.jsx'

let isCalledFetchData = false;

export default (state) => (location) => (actions) => {
  if (!isCalledFetchData)
  {
    state.isFetchingPage = true;
  }

  const articlesInfo = state.articlePage.articlesInfo;

  return (
    <Main state={state} actions={actions}>
      <section
        class="no-padding-top"
        oncreate={(e) => {
          actions.articlePage.loadArticlesInfo(state);
          isCalledFetchData = true;
        }}
        onupdate={(e) => {
          if (!isCalledFetchData)
          {
            e.oncreate(e);
          }
          else
          {
            isCalledFetchData = false;
          }
        }}
      >
        <div class="container-fluid">
          <div class="block">
            <div class="float-right">
              <Link
                to={state.constants.root + '/articles/new'}
                class="btn btn-sm btn-primary"
              >
                + New
              </Link>
            </div>
            <div class="title">
              <strong>Articles</strong>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <td>
                    #
                  </td>
                  <td>
                    Title
                  </td>
                  <td>
                    Author
                  </td>
                </tr>
              </thead>
              <tbody>
                {articlesInfo.map((articleInfo) => {
                  return (
                    <tr>
                      <td>
                        {articleInfo.id}
                      </td>
                      <td>
                        <Link to={articleInfo.permalink + '/edit'}>
                          {articleInfo.title}
                        </Link>
                      </td>
                      <td>
                        <Link to={articleInfo.author.url}>
                          {articleInfo.author.name}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Main>
  );
};

