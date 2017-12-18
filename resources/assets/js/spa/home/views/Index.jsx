import { h } from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

import Main from '../components/Main.jsx';

let listPost = [
  {
    title: 'Test 1',
    type: 'default article',
    post_time: (new Date()).getDate(),
    author: {
      name: 'Dark.Hades',
      url: '/authors/sss',
    },
    permalink: '/article/sss',
    content: 'sdfsdfsdf',
    tags: [
      {
        name: 'sfsdf',
        url: 'fsfsdf',
      },
    ],
  },
];

export default (state) => (location) => (actions) => {
  return (
    <Main state={state} actions={actions}>
      {listPost.map(p => {
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
                <div>
                  {p.content}
                </div>
              </div>
              <div class="tags">
                <i class="fa fa-tags"></i> {p.tags.map(t => {
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
    </Main>
  );
}

