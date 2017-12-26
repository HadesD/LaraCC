import { h } from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

import Main from '../components/Main.jsx';

import utils from '../../commons/utils.js';
import snarkdown from 'snarkdown';

let isCalledFetchData = false;

export default (state) => (location) => (actions) => {
  if (!isCalledFetchData)
  {
    state.isFetchingPage = true;
  }
  return (
    <Main
      state={state}
      actions={actions}
    >
      <div
        class="article-wrapper u-cf single"
        oncreate={(e) => {
          actions.articlePage.loadArticleInfo(state);
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
        <Link class="bubble" to={state.articlePage.articleInfo.permalink}>
          <i class="fa fa-fw fa-video-camera"></i>
        </Link>
        <article class="video">
          <div class="content">
            <h1>
              <Link to={state.articlePage.articleInfo.permalink}>
                {state.articlePage.articleInfo.title}
              </Link>
            </h1>
            <div class="meta">
              <span class="date moment">
                {state.articlePage.articleInfo.post_time}
              </span>
              {!state.articlePage.articleInfo.categories ||
                  (
                    <span class="categories">
                      {state.articlePage.articleInfo.categories.map((c) => {
                        return (
                          <Link to={c.url}>
                            {c.name}
                          </Link>
                        );
                      })}
                    </span>
                  )
              }
            </div>
            <div
              oncreate={
                utils.dangerouslySetInnerHTML(
                  !state.articlePage.articleInfo.content ||
                  snarkdown(state.articlePage.articleInfo.content)
                )
              }
              onupdate={(e) => {
                console.log(2);
                e.oncreate(e)
              }}
            />
          </div>
        </article>
      </div>
    </Main>
  );
};

