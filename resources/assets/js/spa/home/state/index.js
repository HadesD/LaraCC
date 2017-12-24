import {
  location
} from '@hyperapp/router';

export default {
  location: location.state,

  isFetchingPage: false,

  homePage: {
    listPost: [],
  },

  articlePage: {
    articleInfo: {
      categories: [],
      content: null,
    },
  },
};

