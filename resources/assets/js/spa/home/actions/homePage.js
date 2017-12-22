export default {
  update: (doUpdate) => {return (doUpdate ? {} : false)},

  onload: (state) => () => (actions) => {
    let lastFetchingStatus = state.isFetchingPage;
    if (state.articlePage.isLoadCalled)
    {
      state.articlePage.isLoadCalled = false;
      state.isFetchingPage = false;
      return false;
    }

    if (!state.isFetchingPage)
    {
      console.log('Set fetching true');
      state.isFetchingPage = true;
      return {};
    }
  }
}

