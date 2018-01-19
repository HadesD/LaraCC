import { h } from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

import Main from '../components/Main.jsx';

import utils from '../../commons/utils.js';
import snarkdown from 'snarkdown';

let isCalledFetchData = false;

export default (state, actions) => (pState) => (location) => {
  if (!isCalledFetchData)
  {
    state.isFetchingPage = true;
  }

  return (
    <Main state={state} actions={actions}>
      <div
        oncreate={(e) => {
          actions.homePage.onload(state);
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
        {!state.homePage.listPost || state.homePage.listPost.map(articleInfo => {
          return (
            <div class="article-wrapper u-cf">
              <Link class="bubble" to={articleInfo.permalink}>
                <i
                  class={
                    !articleInfo.type_text
                      || articleInfo.type_text.icon_class_name
                  }
                >
                </i>
              </Link>
              <article
                class={!articleInfo.type_text || articleInfo.type_text.name }
              >
                {/* <div class="featured-image"> */}
                  {/*   <Link to={articleInfo.permalink}> */}
                    {/*     <img src="/bilberry-hugo-theme/images/patreon.png" alt="" /> */}
                    {/*   </Link> */}
                  {/* </div> */}
                <div class="content">
                  <h3>
                    <Link to={articleInfo.permalink}>
                      {articleInfo.title}
                    </Link>
                  </h3>
                  <div class="meta">
                    <span class="date moment">{articleInfo.post_time}</span>
                    {
                      !articleInfo.author
                        || (
                          <span class="author">
                            <Link to={articleInfo.author.url}>
                              {articleInfo.author.name}
                            </Link>
                          </span>
                        )
                    }
                  </div>
                  <div
                    oncreate={
                      utils.dangerouslySetInnerHTML(
                        !articleInfo.content
                        || snarkdown(articleInfo.content)
                      )
                    }
                    onupdate={(e) => {
                      e.oncreate(e)
                    }}
                  />
                </div>
                {
                  !articleInfo.tags ||
                    (
                      <div class="tags">
                        <i class="fa fa-tags"></i> {articleInfo.tags.map(t => {
                          return (
                            <Link to={t.url}>
                              {t.name}
                            </Link>
                          );
                        })}
                      </div>
                    )
                }
              </article>
            </div>
          );
        })}
      </div>
    </Main>
  );
}

