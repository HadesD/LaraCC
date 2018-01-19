import { h } from 'hyperapp';

export default (state, actions) => (pState) => (location) => {
  document.title = "Root :: Index";
  console.log(111)

  return (
    <div>
      {state.title}
    </div>
  );
}

