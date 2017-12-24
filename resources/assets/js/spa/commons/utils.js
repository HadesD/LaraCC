export default {
  asset: (filePath) => {
    return ('/media/' + filePath);
  },

  dangerouslySetInnerHTML: (html) => {
    if (html)
    {
      return (element) => {
        element.innerHTML = html;
      };
    }
  },
};
