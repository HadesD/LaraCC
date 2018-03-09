import * as commons from '../../../../../include/config/Commons.json';

export default {
  title: commons.site.title,
  sub_title: commons.site.sub_title,
  api_url: '/api',
  models: {
    article: {
      type: [
        {
          value: 0,
          label: 'Article',
        },
        {
          value: 1,
          label: 'Article',
        },
        {
          value: 2,
          label: 'Article',
        },
        {
          value: 3,
          label: 'Article',
        },
        {
          value: 3,
          label: 'Article',
        },
      ],
    },
  }
};

