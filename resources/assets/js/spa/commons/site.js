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
          label: 'Normal',
        },
        {
          value: 1,
          label: 'Today I Learned',
        },
        {
          value: 2,
          label: 'Quote',
        },
        {
          value: 3,
          label: 'Video',
        },
        {
          value: 4,
          label: 'Image',
        },
      ],
    },
  }
};

