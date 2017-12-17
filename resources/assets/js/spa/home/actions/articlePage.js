import axios from 'axios';

export default {
  update: () => {return ({});},
  loadArticleInfo: (state) => () => (actions) => {
    if (state.articlePage.isLoadCalled)
    {
      state.articlePage.isLoadCalled = false;
      return false;
    }

    state.articlePage.isLoadCalled = true;
    state.isFetchingPage = true;

    axios({
      method: 'GET',
      url: '',
    })
      .then((response) => {
        setTimeout(() => {
          state.isFetchingPage = false;
          // state.articlePage.isLoadCalled = false;
          // actions.update();
        }, 1000);
      })
      .catch((error) => {
        setTimeout(() => {
          state.isFetchingPage = false;
          // state.articlePage.isLoadCalled = false;
          // actions.update();
        }, 1000);
      })
    ;

    return ({});
  },
};

