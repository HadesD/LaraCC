import {h} from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

export default ({state, actions}) => {
  const mY = 2013;
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

