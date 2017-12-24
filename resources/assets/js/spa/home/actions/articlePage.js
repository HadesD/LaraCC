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
        // setTimeout(() => {
        console.log("Fetched: ", response);
        state.articlePage.articleInfo = response.data;
        state.isFetchingPage = false;
        actions.update(state);
        // }, 1000);
      })
      .catch((error) => {
        // setTimeout(() => {
        state.isFetchingPage = false;
        actions.update(state);
        // }, 1000);
      })
    ;

  },
};

