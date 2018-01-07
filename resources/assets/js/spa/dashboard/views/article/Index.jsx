import {h} from 'hyperapp';

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
            <div class="title">
              <strong>Articles</strong>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <td>
                    #
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

