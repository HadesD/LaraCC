import axios from 'axios';

import site from '../../../commons/site.js';
import dashboard from '../../commons/dashboard.js';

export default {
  update: () => {
    return {};
  },
  loadArticlesInfo: ({state, actions}) => async (pState, pActions) => {
    document.title = "Root :: Articles";

    const response = await axios.get(
      `${site.api_url}${dashboard.root_url}/articles`
    );

    state.isFetchingPage = false;
    state.articlePage.articlesInfo = response.data;

    pActions.update();
  },
}

