import {h} from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

export default ({state, actions}) => {
  return (
    <footer class="footer">
      <div class="footer__block block no-margin-bottom">
        <div class="container-fluid text-center">
          <p class="no-margin-bottom">
            2017 &copy; Your company. Design by
            <a href="https://bootstrapious.com">Bootstrapious</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

