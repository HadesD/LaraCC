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
  permalink: '/article/sss',
  content: 's\n### Block Quotes```sfsdf```',
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
  return (element) => {
    element.innerHTML = html;
  };
};

export default (state) => (location) => (actions) => {
  actions.articlePage.loadArticleInfo(state);
  return (
    <Main state={state} actions={actions}>
      <div class="article-wrapper u-cf single">
        <a class="bubble" href="/bilberry-hugo-theme/video/kilez-more-leben-und-tod-des-imperialismus">
          <i class="fa fa-fw fa-video-camera"></i>
        </a>
        <article class="video">
          {/* <div class="responsive-video youtube"> */}
            {/*   <iframe src="https://www.youtube-nocookie.com/embed/Yk_BI3ne0Ic?rel=0" frameborder="0" allowfullscreen></iframe> */}
            {/* </div> */}
          <div class="content">
            <h3>
              <Link to={articleInfo.permalink}>
                {articleInfo.title}
              </Link>
            </h3>
            <div class="meta">
              <span class="date moment">{articleInfo.post_time}</span>
              <span class="categories">
                {articleInfo.categories.map(c => {
                  return (
                    <Link to={c.url}>
                      {c.name}
                    </Link>
                  );
                })}
              </span>
            </div>
            <p oncreate={dangerouslySetInnerHTML(snarkdown(articleInfo.content))} />
          </div>
        </article>
      </div>
    </Main>
  );
};

