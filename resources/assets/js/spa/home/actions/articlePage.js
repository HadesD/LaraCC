import axios from 'axios';
import site from '../../commons/site.js';

export default {
  update: (doUpdate) => {
    state.isFetchingPage = false;
    return (doUpdate);
  },

  loadArticleInfo: (state) => () => (actions) => {
    if (state.isfetchingpage)
    {
      return false;
    }

    state.isFetchingPage = true;

    axios({
      method: 'GET',
      url: site.api_url + state.location.pathname,
    })
      .then((response) => {
        // setTimeout(() => {
        console.log(response);

        actions.update({
          articlePage: {
            articleInfo: response.data
          }
        });
        console.log(state.articlePage.articleInfo);
        // }, 1000);
      })
      .catch((error) => {
        // setTimeout(() => {
        // }, 1000);
      })
    ;

  },
};

