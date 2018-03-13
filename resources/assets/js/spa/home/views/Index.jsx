import { h } from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

import QuoteFormat from './index_components/QuoteFormat.jsx';
import NormalFormat from './index_components/NormalFormat.jsx';
import TilFormat from './index_components/TilFormat.jsx';

let isCalledFetchData = false;

export default (state, actions) => ({match}) => {
  if (!isCalledFetchData)
  {
    state.isFetchingPage = true;
  }

  return (
    <div
      oncreate={(e) => {
        actions.homePage.onload({state, actions});
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
        let ArticleFormat;

        switch (articleInfo.type)
        {
          case 1:
            ArticleFormat = TilFormat;
            break;
          case 2:
            ArticleFormat = QuoteFormat;
            break;
          case 3:
            ArticleFormat = NormalFormat;
            break;
          case 4:
            ArticleFormat = NormalFormat;
            break;
          case 0:
          default:
            ArticleFormat = NormalFormat;
        }

        return (
          <div
            class={
              'article-wrapper u-cf'
                + (articleInfo.type_text ?
                  ' ' + articleInfo.type_text.format :
                  '')
            }
          >
            <Link class="bubble" to={articleInfo.permalink}>
              <i
                class={
                  !articleInfo.type_text
                    || articleInfo.type_text.icon_class_name
                }
              >
              </i>
            </Link>
            <ArticleFormat
              state={state}
              actions={actions}
              articleInfo={articleInfo}
            />
          </div>
        );
      })}
    </div>
  );
};

