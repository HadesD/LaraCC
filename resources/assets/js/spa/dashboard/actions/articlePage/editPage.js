import axios from 'axios';

import site from '../../../commons/site.js';
import dashboard from '../../commons/dashboard.js';

export default {
  update: () => {
    return {};
  },
  loadArticleInfo: ({state, actions}) => async (pState, pActions) => {
    document.title = "Root :: Articles";

    const response = await axios.get(
      `${site.api_url}${state.location.pathname}`
    );

    state.isFetchingPage = false;
    state.articlePage.articleInfo = response.data;

    pActions.update();
  },
}

