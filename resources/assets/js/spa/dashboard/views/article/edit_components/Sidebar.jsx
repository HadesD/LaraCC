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
            console.log(t);
            return (
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                <label class="custom-control-label" for="customCheck1">{t.label}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

