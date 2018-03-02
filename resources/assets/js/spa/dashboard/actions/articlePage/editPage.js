import axios from 'axios';
import URLSearchParams from 'url-search-params';

import site from '../../../commons/site.js';
import dashboard from '../../commons/dashboard.js';

export default {
  update: () => ({}),

  loadArticleInfo: ({state, actions}) => async (pState, pActions) => {
    document.title = "Root :: Articles";

    const response = await axios.get(
      `${site.api_url}${state.location.pathname}`
    );

    state.isFetchingPage = false;
    pState.articleInfo = response.data;

    pActions.update();
  },

  saveOrPublishArticle: (event) => async (pState, pActions) => {
    const isNewArticle = pState.isNewArticle;
    const articleInfo = pState.articleInfo;

    let data = new URLSearchParams();

    for (let key in articleInfo)
    {
      if (typeof articleInfo[key] == 'object')
      {
        continue;
      }

      data.append(key, articleInfo[key]);
    }

    console.log(data);

    const request = await axios.patch(
      `${site.api_url}${dashboard.root_url}/articles/${articleInfo['id']}`,
      data
    );
    console.log(request);
  },
}

