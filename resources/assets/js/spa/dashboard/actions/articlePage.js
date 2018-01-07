import axios from 'axios';
import site from '../../commons/site.js';

export default {
  update: (state) => {
    return {};
  },
  loadArticlesInfo: (state) => () => (actions) => {
    document.title = "Root :: Articles";
    axios({
      method: 'GET',
      url: site.api_url + state.constants.root + '/articles'
    })
      .then((response) => {
        console.log(response);
        state.isFetchingPage = false;
        state.articlePage.articlesInfo = response.data;
        actions.update(state);
      })
      .then((error) => {
        state.isFetchingPage = false;
        actions.update(state);
      })
    ;
  },
}

