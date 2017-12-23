import { h } from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

import snarkdown from 'snarkdown';

import Main from '../components/Main.jsx';

let articleInfo = {
  title: 'Test 1',
  type: 'default article',
  post_time: (new Date()).getDate(),
  author: {
    name: 'Dark.Hades',
    url: '/authors/sss',
  },
  permalink: '/articles/sss',
  content: '### Block Quotes\n```cpp\nTest code\n```\n`Test CODE`',
  tags: [
    {
      name: 'sfsdf',
      url: '/tags/fsfsdf',
    },
  ],
  categories: [
    {
      name: 'Game',
      url: '/categories/sss',
    },
  ],
};

const dangerouslySetInnerHTML = (html) => {
  if (html)
  {
    return (element) => {
      element.innerHTML = html;
    };
  }
};

export default (state) => (location) => (actions) => {
  console.log(state.articlePage.articleInfo);
  actions.articlePage.loadArticleInfo(state);
  return (
    <Main state={state} actions={actions}>
      <div class="article-wrapper u-cf single">
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
              <span class="date moment">{state.articlePage.articleInfo.post_time}</span>
              <span class="categories">
                {state.articlePage.articleInfo.categories.map((c) => {
                  return (
                    <Link to={c.url}>
                      {c.name}
                    </Link>
                  );
                })}
              </span>
            </div>
            <p
              oncreate={
                dangerouslySetInnerHTML(
                  !state.articlePage.articleInfo.content ||
                  snarkdown(state.articlePage.articleInfo.content)
                )
              }
            />
          </div>
        </article>
      </div>
    </Main>
  );
};

