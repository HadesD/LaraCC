import {h} from 'hyperapp';

import site from '../../../../commons/site.js';

export default ({pActions, isNewArticle}) => {
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
            Article Informations
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

