import {h} from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

import utils from '../../../commons/utils.js';
import site from '../../../commons/site.js';

export default ({state, actions}) => {
  return (
    <header>
      <div class="container">
        <div class="logo">
          <Link class="logo" to="/">
            <img src={utils.asset('images/rem-chibi.jpg')} alt="" />
            <span class="overlay">
              <i class="fa fa-home"></i>
            </span>
          </Link>
        </div>
        <div class="titles">
          <h3 class="title">
            <Link to="/">
              {site.title}
            </Link>
          </h3>
          <span class="subtitle">
            {site.sub_title}
          </span>
        </div>
        <div class="toggler permanentTopNav">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
    </header>
  );
};

