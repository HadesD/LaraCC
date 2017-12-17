import { h } from 'hyperapp';

import Main from '../components/Main.jsx';

export default (state) => (location) => (actions) => {
  return (
    <Main state={state} actions={actions}>

    </Main>
  );
}

