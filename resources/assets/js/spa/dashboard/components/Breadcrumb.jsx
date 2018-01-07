import {h} from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

export default ({state, actions}) => {
  return (
    <div class="container-fluid">
      <ul class="breadcrumb">
        <li class="breadcrumb-item">
          <Link to={state.constants.root}>
            Home
          </Link>
        </li>
        <li class="breadcrumb-item active">Charts</li>
      </ul>
    </div>
  );
};

