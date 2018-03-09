import {h} from 'hyperapp';

import utils from '../../../../commons/utils.js';

import ParseMarkdownJs from 'parse-markdown-js';
import loadScript from 'load-script';

let previewContent = null;
let contentElmt = null;

export default ({articleInfo, pState, pActions, isNewArticle}) => {
  previewContent = document.getElementById('previewContent');
  contentElmt = document.getElementById('content');
  return (
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
              oninput={(e) => {
                pState.articleInfo[e.target.name] = e.target.value;
              }}
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
                oninput={(e) => {
                  pState.articleInfo[e.target.name] = e.target.value;
                }}
              />
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" for="content">
              Content
            </label>
            <div class="row">
              <div class="col-md">
                <textarea
                  rows="15"
                  placeholder="Article content"
                  class="form-control"
                  id="content"
                  name="content"
                  value={articleInfo.get('content')}
                  oninput={(e) => {
                    pState.articleInfo[e.target.name] = e.target.value;
                    if (previewContent)
                    {
                      previewContent.innerHTML = ParseMarkdownJs(articleInfo.get('content'));
                    }
                  }}
                  onupdate={(e) => {
                    if (previewContent)
                    {
                      previewContent.innerHTML = ParseMarkdownJs(articleInfo.get('content'));
                    }
                  }}
                  onscroll={(e) => {
                    let scrollToN =
                      previewContent.scrollHeight
                      /
                      contentElmt.scrollHeight
                      * contentElmt.scrollTop
                    ;
                    previewContent.scrollTo(0, scrollToN);
                  }}
                />
              </div>
              <div
                class="col-md text-justify"
                id="previewContent"
                style={{
                  maxHeight: (contentElmt) ? contentElmt.clientHeight + 'px' : '100%',
                  overflowY: 'scroll',
                }}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

