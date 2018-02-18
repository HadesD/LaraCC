import axios from 'axios';

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

    for (let key in articleInfo)
    {
      console.log(articleInfo[key]);
    }
  },
}

