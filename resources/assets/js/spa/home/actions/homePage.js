import axios from 'axios';
import site from '../../commons/site.js';

export default {
  update: () => {
    return {};
  },

  onload: ({state, actions}) => (pState, pActions) => {
    document.title = site.title;
    axios({
      method: 'GET',
      url: `${site.api_url}/articles`,
    })
      .then((response) => {
        state.isFetchingPage = false;
        state.homePage.listPost = response.data;
        pActions.update();
      })
      .then((error) => {
        state.isFetchingPage = false;
        pActions.update();
      })
    ;
  }
}

