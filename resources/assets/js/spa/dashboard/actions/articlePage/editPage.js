import axios from 'axios';

import site from '../../../commons/site.js';
import dashboard from '../../commons/dashboard.js';

export default {
  update: () => {
    return {};
  },
  loadArticleInfo: ({state, actions}) => (pState, pActions) => {
    document.title = "Root :: Articles";
    console.log(state)
    axios({
      method: 'GET',
      url: `${site.api_url}${state.location.pathname}`
    })
      .then((response) => {
        console.log(response);
        state.isFetchingPage = false;
        state.articlePage.articlesInfo = response.data;
        pActions.update();
      })
      .then((error) => {
        state.isFetchingPage = false;
        pActions.update();
      })
    ;
  },
}

