export default {
  loadArticleInfo: (state) => {
    if (state.articlePage.isLoadCalled)
    {
      state.articlePage.isLoadCalled = false;
      return false;
    }

    console.log(1);

    state.articlePage.isLoadCalled = true;

    return ({});
  },
};

