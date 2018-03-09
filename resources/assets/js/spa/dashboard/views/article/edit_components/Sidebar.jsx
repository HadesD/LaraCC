import {h} from 'hyperapp';

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
      <div class="">
        ff
      </div>
    </div>
  );
};

