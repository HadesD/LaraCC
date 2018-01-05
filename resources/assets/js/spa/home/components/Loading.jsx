import {h} from 'hyperapp';
import {
  Link
} from '@hyperapp/router';

import styles from '../../../../sass/home.scss';

export default ({state, actions}) => {
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

