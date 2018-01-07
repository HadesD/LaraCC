import {h} from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

export default ({state, actions}) => {
  const mY = 2013;
  return (
    <footer class="footer">
      <div class="footer__block block no-margin-bottom">
        <div class="container-fluid text-center">
          <p class="no-margin-bottom">
            &copy; {
              (new Date().getFullYear() > mY) ? mY+' - ' : ''
            }
            {
              (new Date().getFullYear())
            } by <a href="https://github.com/HadesD" target="_blank">
              Dark.Hades
            </a>
            <br />
            Designed with <i class="fa fa-heart"></i> by <a href="https://bootstrapious.com">Bootstrapious</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

