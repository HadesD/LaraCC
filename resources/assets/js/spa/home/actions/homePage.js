import axios from 'axios';
import site from '../../commons/site.js';

export default {
  update: (doUpdate) => {return (doUpdate ? {} : false)},

  onload: (state) => () => (actions) => {
    if (state.isFetchingPage)
    {
      state.isFetchingPage = false;
      return false;
    }

    axios({
      method: 'GET',
      url: site.api_url + '/articles'
    })
      .then((response) => {
        console.log(response);
        state.isFetchingPage = false;
        actions.update(state.isFetchingPage);
      })
      .then((error) => {
        state.isFetchingPage = false;
        actions.update(state.isFetchingPage);
      })
    ;
  }
}

