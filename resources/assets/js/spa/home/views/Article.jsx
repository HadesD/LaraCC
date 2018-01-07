import { h } from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

import Main from '../components/Main.jsx';

import utils from '../../commons/utils.js';
import snarkdown from 'snarkdown';

let isCalledFetchData = false;
let articleInfo = {};

export default (state) => (location) => (actions) => {
  if (!isCalledFetchData)
  {
    state.isFetchingPage = true;
  }

  articleInfo = state.articlePage.articleInfo;

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
        <Link class="bubble" to={articleInfo.permalink}>
          <i
            class={
              !articleInfo.type_text ||
                articleInfo.type_text.icon_class_name
            }
          >
          </i>
        </Link>
        <article class={!articleInfo.type_text || articleInfo.type_text.name}>
          <div class="content">
            <h1>
              <Link to={articleInfo.permalink}>
                {articleInfo.title}
              </Link>
            </h1>
            <div class="meta">
              <span class="date moment">
                {articleInfo.post_time}
              </span>
              {!articleInfo.categories ||
                  (
                    <span class="categories">
                      {articleInfo.categories.map((c) => {
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
                  !articleInfo.content || snarkdown(articleInfo.content)
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

