import {
  h
} from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

export default (state) => (actions) => (props) => {
  return (
    <main>
      <button>ROOT</button>
      <Link to="/root/login">Login</Link>
    </main>
  );
}

