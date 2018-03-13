import { h } from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

import utils from '../../../commons/utils.js';
import ParseMarkdownJs from 'parse-markdown-js';

export default ({state, actions, articleInfo}) => {
  return (
    <article
      class={!articleInfo.type_text || articleInfo.type_text.name }
    >
      <div class="content">
        <h3>
          <Link to={articleInfo.permalink}>
            {articleInfo.title}
          </Link>
        </h3>
        <div class="meta">
          <span class="date moment">{articleInfo.updated_at}</span>
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
  );
};

