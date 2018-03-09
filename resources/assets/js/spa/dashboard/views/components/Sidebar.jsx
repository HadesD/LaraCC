import { h } from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

import utils from '../../../commons/utils.js';
import site from '../../../commons/site.js';
import dashboard from '../../commons/dashboard.js';

const isActiveLink = (locPathName, locUrl) => {
  let locPnArr = locPathName.split('/');
  let locUrlArr = locUrl.split('/');

  // Compare Article
  if (locPnArr[2] === 'articles')
  {
    if (locUrlArr[2] === locPnArr[2])
    {
      return true;
    }
  }

  if (locPathName === locUrl)
  {
    return true;
  }

  return false;
};

export default ({state, actions}) => {
  const sidebarLinkList = [
    {
      header_text: 'Main',
      links: [
        {
          url: dashboard.root_url,
          icon: 'icon-home',
          text: 'Home',
        },
        {
          url: `${dashboard.root_url}/articles`,
          icon: 'icon-paper-and-pencil',
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
            src={utils.asset('images/rem-chibi.jpg')}
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
                  <li
                    class={
                      isActiveLink(state.location.pathname, link.url) ? 'active' : ''
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

