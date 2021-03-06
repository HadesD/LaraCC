import { h } from 'hyperapp';
import {
  Link,
  Redirect
} from '@hyperapp/router';

let isCalledFetchData = false;

export default (state, actions) => ({match}) => {
  if (!isCalledFetchData)
  {
    state.isFetchingPage = true;
  }

  const articlesInfo = state.articlePage.articlesInfo;

  return (
    <section
      class="no-padding-top"
      oncreate={(e) => {
        actions.articlePage.indexPage.loadArticlesInfo({state, actions});
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
              to={`${match.url}/new`}
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
                <td>
                  Created At
                </td>
                <td>
                  Updated At
                </td>
              </tr>
            </thead>
            <tbody>
              {articlesInfo.map((articleInfo) => {
                return (
                  <tr>
                    <td>
                      <Link to={`${match.url}/${articleInfo.id}`}>
                        {articleInfo.id}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`${match.url}/${articleInfo.id}`}
                      >
                        {articleInfo.title}
                      </Link>
                    </td>
                    <td>
                      <Link to={articleInfo.author.url}>
                        {articleInfo.author.name}
                      </Link>
                    </td>
                    <td>
                      {articleInfo.created_at}
                    </td>
                    <td>
                      {articleInfo.updated_at}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

