import {h} from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

export default ({state, actions}, children) => {
  return (
    <div className="bilberry-hugo-theme">
      <nav className="permanentTopNav">
      </nav>
      <header>
        <div class="container">
          <div class="logo">
            <a href="/" class="logo">
              <img src="https://www.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e?d=mm&size=200" alt="" />
              <span class="overlay"><i class="fa fa-home"></i></span>
            </a>
          </div>
          <div class="titles">
            <h3 class="title"><a href="/">My cool new Blog</a></h3>
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
