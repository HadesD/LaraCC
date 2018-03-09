import { h } from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

import site from '../../../commons/site.js';
import dashboard from '../../commons/dashboard.js';

export default ({state, actions}) => {
  return (
    <div class="container-fluid">
      <ul class="breadcrumb">
        <li class="breadcrumb-item">
          <Link to={dashboard.root_url}>
            Home
          </Link>
        </li>
        <li class="breadcrumb-item active">
          {document.title}
        </li>
      </ul>
    </div>
  );
};

