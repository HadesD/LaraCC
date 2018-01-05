import {h} from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

import Loading from './Loading.jsx';
import TopNav from './TopNav.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default ({state, actions}, children) => {
  return (
    <div class="bilberry-hugo-theme">
      <TopNav state={state} actions={actions} />
      <Header state={state} actions={actions} />
      <main class="main container">
        <Loading state={state} actions={actions} />
        {children}
      </main>
      <Footer state={state} actions={actions} />
    </div>
  );
};

