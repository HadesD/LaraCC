import axios from 'axios';
import site from '../../commons/site.js';

export default {
  update: (doUpdate) => {
    return ({})
  },

  onload: (state) => () => (actions) => {
    document.title = site.title;
    axios({
      method: 'GET',
      url: site.api_url + '/articles'
    })
      .then((response) => {
        console.log(response);
        state.isFetchingPage = false;
        state.homePage.listPost = response.data;
        actions.update(state);
      })
      .then((error) => {
        state.isFetchingPage = false;
        actions.update(state);
      })
    ;
  }
}

