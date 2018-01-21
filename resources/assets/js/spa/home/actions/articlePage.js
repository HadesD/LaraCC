import axios from 'axios';
import site from '../../commons/site.js';

export default {
  update: () => {
    return {};
  },

  loadArticleInfo: ({state, actions}) => (pState, pActions) => {
    axios({
      method: 'GET',
      url: `${site.api_url}${state.location.pathname}`,
    })
      .then((response) => {
        pState.articleInfo = response.data;
        document.title = `${pState.articleInfo.title} | ${site.title}`;
        state.isFetchingPage = false;
        pActions.update();
      })
      .catch((error) => {
        state.isFetchingPage = false;
        pActions.update();
      })
    ;
  },
};

