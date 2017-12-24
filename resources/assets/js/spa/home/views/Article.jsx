import { h } from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

import snarkdown from 'snarkdown';

import Main from '../components/Main.jsx';

const dangerouslySetInnerHTML = (html) => {
  if (html)
  {
    return (element) => {
      element.innerHTML = html;
    };
  }
};

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
            // actions.articlePage.loadArticleInfo(state);
            // isCalledFetchData = true;
          }
          console.log("update")
        }}
      >
        <Link class="bubble" to={state.articlePage.articleInfo.permalink}>
          <i class="fa fa-fw fa-video-camera"></i>
        </Link>
        <article class="video">
          <div class="content">
            <h3>
              <Link to={state.articlePage.articleInfo.permalink}>
                {state.articlePage.articleInfo.title}
              </Link>
            </h3>
            <div class="meta">
              <span class="date moment">
                {state.articlePage.articleInfo.post_time}
              </span>
              <span class="categories">
                {
                  !state.articlePage.articleInfo.categories ||
                    state.articlePage.articleInfo.categories.map((c) => {
                      return (
                        <Link to={c.url}>
                          {c.name}
                        </Link>
                      );
                    })
                }
              </span>
            </div>
            <p
              oncreate={
                dangerouslySetInnerHTML(
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

