import axios from 'axios';
import site from '../../commons/site.js';

export default {
  update: (state) => {
    return ({});
  },

  loadArticleInfo: (state) => () => (actions) => {
    axios({
      method: 'GET',
      url: site.api_url + state.location.pathname,
    })
      .then((response) => {
        console.log("Fetched: ", response);
        state.articlePage.articleInfo = response.data;
        document.title = state.articlePage.articleInfo.title
          + ' | ' + site.title;
        state.isFetchingPage = false;
        actions.update(state);
      })
      .catch((error) => {
        state.isFetchingPage = false;
        actions.update(state);
      })
    ;

  },
};

