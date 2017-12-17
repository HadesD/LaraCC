import {
  location
} from '@hyperapp/router';

export default {
  location: location.state,

  isFetchingPage: false,

  articlePage: {
    isLoadCalled: false,
  },
};

