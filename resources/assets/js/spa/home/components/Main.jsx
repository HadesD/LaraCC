import {h} from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

import styles from '../../../../sass/home.scss';

import utils from '../../commons/utils.js';
import site from '../../commons/site.js';

const mY = 2013;

const Loading = ({state, actions}) => {
  if (!state.isFetchingPage)
  {
    return false;
  }

  return (
    <div class={styles.loading}>
      <i class="fa fa-circle-o-notch fa-spin fa-fw fa-2x"></i>
    </div>
  );
};

const TopNav = ({state, actions}) => {
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

const Header = ({state, actions}) => {
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

const Footer = () => {
  return (
    <footer class="credits">
      <div class="container">
        <div class="copyright">
          &copy; {(new Date().getFullYear() > mY) ? mY+' - ' : ''}{(new Date().getFullYear())} by <a href="https://github.com/HadesD" target="_blank">Dark.Hades</a>
        </div>
        <div class="author">
          Theme with <i class="fa fa-heart"></i> by <a href="https://github.com/Lednerb" target="_blank">
            Lednerb
          </a>
        </div>
      </div>
    </footer>
  );
};

const Main = ({state, actions, children}) => {
  return (
    <main class="main container">
      <Loading state={state} actions={actions} />
      {children}
    </main>
  );
};

export default ({state, actions}, children) => {
  return (
    <div class="bilberry-hugo-theme">
      <TopNav state={state} actions={actions} />
      <Header state={state} actions={actions} />
      <Main state={state} actions={actions} children={children} />
      <Footer state={state} actions={actions} />
    </div>
  );
};
