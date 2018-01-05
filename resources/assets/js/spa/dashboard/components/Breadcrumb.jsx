import {h} from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

export default ({state, actions}) => {
  return (
    <div class="container-fluid">
      <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
        <li class="breadcrumb-item active">Charts</li>
      </ul>
    </div>
  );
};

