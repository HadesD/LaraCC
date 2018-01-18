import {
  h
} from 'hyperapp';

export default (state, actions) => (pState) => (location) => {
  document.title = "Root :: Index";

  return (
    <div>
      {state.title}
    </div>
  );
}

