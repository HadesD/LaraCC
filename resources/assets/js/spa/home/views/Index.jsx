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
        {!state.homePage.listPost || state.homePage.listPost.map(p => {
          return (
            <div class="article-wrapper u-cf">
              <Link to={p.permalink} class="bubble">
                <i class="fa fa-fw fa-pencil">
                </i>
              </Link>
              <article class={p.type}>
                {/* <div class="featured-image"> */}
                  {/*   <Link to={p.permalink}> */}
                    {/*     <img src="/bilberry-hugo-theme/images/patreon.png" alt="" /> */}
                    {/*   </Link> */}
                  {/* </div> */}
                <div class="content">
                  <h3>
                    <Link to={p.permalink}>
                      {p.title}
                    </Link>
                  </h3>
                  <div class="meta">
                    <span class="date moment">{p.post_time}</span>
                    <span class="author">
                      <Link to={p.author.url}>
                        {p.author.name}
                      </Link>
                    </span>
                  </div>
                  <p
                    oncreate={
                      utils.dangerouslySetInnerHTML(
                        !p.content ||
                        snarkdown(p.content)
                      )
                    }
                    onupdate={(e) => {
                      e.oncreate(e)
                    }}
                  />
                </div>
                <div class="tags">
                  <i class="fa fa-tags"></i> {!p.tags || p.tags.map(t => {
                    return (
                      <Link to={t.url}>
                        {t.name}
                      </Link>
                    );
                  })}
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </Main>
  );
}

