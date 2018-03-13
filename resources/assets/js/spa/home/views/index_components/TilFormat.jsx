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
        <div
          oncreate={
            utils.dangerouslySetInnerHTML(
              !articleInfo.content
              || ParseMarkdownJs(articleInfo.content)
            )
          }
          onupdate={(e) => {
            e.oncreate(e);
          }}
        />
      </div>
    </article>
  );
};

