import { h } from 'hyperapp';

export default (state, actions) => ({match}) => {
  document.title = 'Root :: Index';

  return (
    <div>
      {state.title}
    </div>
  );
}

