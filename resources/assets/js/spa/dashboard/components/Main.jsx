import {h} from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Breadcrumb from './Breadcrumb.jsx';
import Footer from './Footer.jsx';

export default ({state, actions}, children) => {
  return (
    <div>
      <Header state={state} actions={actions} />
      <div class="d-flex align-items-stretch">
        <Sidebar state={state} actions={actions} />
        <div class={'page-content' + (state.isSidebarOpenned ? ' active' : '')}>
          <div class="page-header no-margin-bottom">
            <div class="container-fluid">
              <h2 class="h5 no-margin-bottom">Dashboard</h2>
            </div>
          </div>
          <Breadcrumb state={state} actions={actions} />
          {children}
          <Footer state={state} actions={actions} />
        </div>
      </div>
      {console.log(state)}
    </div>
  );
};

