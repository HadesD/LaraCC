import { h } from 'hyperapp';

import site from '../../../commons/site.js';
import dashboard from '../../commons/dashboard.js';

export default (state, actions) => ({match}) => {
  const isNewArticle = (
    match.path === `${dashboard.root_url}/articles/new`
  );

  if (isNewArticle)
  {
    document.title = 'Root :: Articles :: New';
  }
  else
  {
    document.title = 'Root :: Articles :: Edit';
  }

  return (
    <section class="no-padding-top">
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
                    value={''}
                  />
                </div>
                <div class="form-group">
                  <label class="form-control-label">Content</label>
                  <textarea
                    placeholder="Article content"
                    class="form-control"
                    id="content"
                    name="content"
                    value={''}
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="block">
              <div class="title">
                <strong class="d-block">
                  Publish
                </strong>
              </div>
              <div class="block-body">
                <div class="form-group">
                  <input type="submit" value="Signin" class="btn btn-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

