import {h} from 'hyperapp';

import site from '../../../../commons/site.js';

export default ({pState, pActions, articleInfo, isNewArticle}) => {
  return (
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
              onclick={pActions.saveOrPublishArticle}
            >
              {isNewArticle ? 'Publish' : 'Save'}
            </button>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="title">
          <strong class="d-block">
            Article Type
          </strong>
        </div>
        <div class="block-body">
          {site.models.article.type.map((t, i) => {
            let id = `type-${t.value}`;
            return (
              <div class="custom-control custom-radio">
                <input
                  name="type"
                  type="radio"
                  class="custom-control-input"
                  value={t.value}
                  id={id}
                  checked={
                    (articleInfo.get('type') == t.value) ? true : false
                  }
                  onchange={(e) => {
                    pState.articleInfo[e.target.name] = e.target.value;

                  }}
                />
                <label
                  class="custom-control-label"
                  for={id}
                >
                  {t.label}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div class="block">
        <div class="title">
          <strong class="d-block">
            Tags
          </strong>
        </div>
        <div class="block-body">
          {site.models.article.type.map((t, i) => {
            let id = `type-${t.value}`;
            return (
              <div class="custom-control custom-radio">
                <input
                  name="type"
                  type="radio"
                  class="custom-control-input"
                  id={id}
                />
                <label
                  class="custom-control-label"
                  for={id}
                >
                  {t.label}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

