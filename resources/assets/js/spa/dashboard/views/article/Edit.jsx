import { h } from 'hyperapp';

import dashboard from '../../commons/dashboard.js';

import MainEditor from './edit_components/MainEditor.jsx';
import Sidebar from './edit_components/Sidebar.jsx';

let isCalledFetchData = false;

class ArticleInfo
{
  constructor(data)
  {
    this.data = data;
  }

  get(key)
  {
    if (this.data && (undefined !== this.data[key]))
    {
      return this.data[key];
    }

    return null;
  }
}

export default (state, actions) => ({match}) => {
  let pState = state.articlePage.editPage;
  let pActions = actions.articlePage.editPage;

  if (!isCalledFetchData)
  {
    state.isFetchingPage = true;
  }

  const isNewArticle = (
    match.url === `${dashboard.root_url}/articles/new`
  );

  pState.isNewArticle = isNewArticle;

  let articleData;

  if (isNewArticle)
  {
    document.title = 'Root :: Articles :: New';
    articleData = null;
  }
  else
  {
    document.title = 'Root :: Articles :: Edit';
    articleData = pState.articleInfo;
  }

  const articleInfo = new ArticleInfo(articleData);

  return (
    <section
      class="no-padding-top"
      oncreate={(e) => {
        if (isNewArticle)
        {
          return;
        }
        pActions.loadArticleInfo({state, actions});
        isCalledFetchData = true;
      }}
      onupdate={(e) => {
        if (isNewArticle)
        {
          return;
        }
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
        <div class="row">
          <MainEditor
            state={state}
            actions={actions}
            pState={pState}
            pActions={pActions}
            articleInfo={articleInfo}
            isNewArticle={isNewArticle}
          />
          <Sidebar
            state={state}
            actions={actions}
            pState={pState}
            pActions={pActions}
            articleInfo={articleInfo}
            isNewArticle={isNewArticle}
          />
        </div>
      </div>
    </section>
  );
};

