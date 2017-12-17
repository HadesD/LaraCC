import {h} from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

export default ({state, actions}, children) => {
  return (
    <div className="bilberry-hugo-theme">
      <nav className="permanentTopNav">
        <div class="container">
          <ul class="topnav">
            <li><a href="/bilberry-hugo-theme/page/about-bilberry/">About Bilberry</a></li>
            <li><a href="https://github.com/Lednerb/bilberry-hugo-theme" target="_blank">Github</a></li>
          </ul>
          <div id="search-box" class="search">
            <i class="fa fa-search"></i>
            <input id="search" type="text" placeholder="Search ..." />
          </div>
        </div>
      </nav>
      <header>
        <div class="container">
          <div class="logo">
            <Link to="/" class="logo">
              <img src="https://www.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e?d=mm&size=200" alt="" />
              <span class="overlay"><i class="fa fa-home"></i></span>
            </Link>
          </div>
          <div class="titles">
            <h3 class="title">
              <Link to="/">My cool new Blog</Link>
            </h3>
            <span class="subtitle">Hello World! This is the most epic subtitle ever.</span>
          </div>
          <div class="toggler permanentTopNav">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
      </header>
      <main className="main container">
        {children}
      </main>
      <footer className="credits">
        <div class="container">
          <div class="copyright">
            &copy; 2017 by <a href="https://github.com/HadesD" target="_blank">Dark.Hades</a>
          </div>
          <div class="author">
            <a href="https://github.com/Lednerb/gohugo-theme-bilberry" target="_blank">Bilberry Hugo Theme</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
