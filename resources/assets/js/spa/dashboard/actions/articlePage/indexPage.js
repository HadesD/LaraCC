import axios from 'axios';

import site from '../../../commons/site.js';
import dashboard from '../../commons/dashboard.js';

export default {
  update: () => {
    return {};
  },
  loadArticlesInfo: ({state, actions}) => (pState, pActions) => {
    document.title = "Root :: Articles";
    axios({
      method: 'GET',
      url: `${site.api_url}${dashboard.root_url}/articles`
    })
      .then((response) => {
        // console.log(response);
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

