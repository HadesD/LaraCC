import {h} from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

export default ({state, actions}) => {
  return (
    <nav class="permanentTopNav">
      <div class="container">
        <ul class="topnav">
          <li>
            <a href="https://github.com/HadesD" target="_blank">
              {/* <i class="fa fa-github fa-2x"></i> */}
              GitHub
            </a>
          </li>
          <li>
            <a href="https://twitter.com/darkhades1002" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
        <div id="search-box" class="search">
          <i class="fa fa-search"></i>
          <input id="search" type="text" placeholder="Search ..." />
        </div>
      </div>
    </nav>
  );
};

