import {
  location
} from '@hyperapp/router';

export default {
  location: location.state,

  isFetchingPage: false,

  homePage: {

  },

  articlePage: {
    articleInfo: {
      categories: [],
      content: null,
    },
  },
};

