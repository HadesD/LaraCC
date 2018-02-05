import { h } from 'hyperapp';

import site from '../../../commons/site.js';
import dashboard from '../../commons/dashboard.js';

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
  if (!isCalledFetchData)
  {
    state.isFetchingPage = true;
  }

  const isNewArticle = (
    match.url === `${dashboard.root_url}/articles/new`
  );

  let articleData;

  if (isNewArticle)
  {
    document.title = 'Root :: Articles :: New';
    articleData = null;
  }
  else
  {
    document.title = 'Root :: Articles :: Edit';
    articleData = state.articlePage.articleInfo;
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
        actions.articlePage.editPage.loadArticleInfo({state, actions});
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
          <div class="col-lg-9">
            <div class="block">
              <div class="title">
                <strong class="d-block">
                  {isNewArticle ? 'Add New Article' : 'Edit Article'}
                </strong>
              </div>
              <div class="block-body">
                <div class="form-group">
                  <label
                    class="form-control-label"
                    for="title"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter title here"
                    class="form-control"
                    id="title"
                    name="title"
                    value={articleInfo.get('title')}
                  />
                </div>
                <div class="form-group">
                  <label
                    class="form-control-label"
                    for="slug"
                  >
                    Slug
                  </label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <a
                        class="btn btn-primary"
                        href={articleInfo.get('permalink')}
                        target="_blank"
                        disabled={isNewArticle ? true : false}
                      >
                        View
                      </a>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter slug here"
                      class="form-control"
                      id="slug"
                      name="slug"
                      value={articleInfo.get('slug')}
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-control-label" for="content">
                    Content
                  </label>
                  <textarea
                    rows="15"
                    placeholder="Article content"
                    class="form-control"
                    id="content"
                    name="content"
                    value={articleInfo.get('content')}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="block">
              <div class="title">
                <strong class="d-block">
                  Actions
                </strong>
              </div>
              <div class="block-body">
                <div class="form-group">
                  <button
                    class="btn btn-primary btn-lg btn-block"
                  >
                    {isNewArticle ? 'Publish' : 'Save'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

