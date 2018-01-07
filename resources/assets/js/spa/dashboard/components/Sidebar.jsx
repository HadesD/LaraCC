import {h} from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

import utils from '../../commons/utils.js';

export default ({state, actions}) => {
  const sidebarLinkList = [
    {
      header_text: 'Main',
      links: [
        {
          url: state.constants.root,
          icon: 'icon-home',
          text: 'Home',
        },
        {
          url: state.constants.root + '/articles/f',
          icon: 'icon-article',
          text: 'Articles',
        },
      ]
    },
  ];

  return (
    <nav id="sidebar" class={state.isSidebarOpenned ? 'shrinked' : ''}>
      <div class="sidebar-header d-flex align-items-center">
        <div class="avatar">
          <img
            src={utils.asset("images/rem-chibi.jpg")}
            class="img-fluid rounded-circle"
          />
        </div>
        <div class="title">
          <h1 class="h5">Dark.Hades</h1>
          <p>Programmer</p>
        </div>
      </div>
        {sidebarLinkList.map((list) => {
          return (
            <div>
              <span class="heading">
                {list.header_text}
              </span>
              <ul class="list-unstyled">
                {list.links.map((link) => {
                  return (
                    <li class={
                      state.location.pathname == link.url ? 'active' : ''
                    }
                    >
                      <Link to={link.url}>
                        <i class={link.icon}></i>
                        {link.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>
  );
};

