import { h, app } from "hyperapp"
import { location, Link, Route } from "@hyperapp/router"

const homeView = (state, actions) => (props) => {
  return (
    <div>
      <button onclick={actions.up}>
        FFF
      </button>
      {state.c}
      {console.log(state, actions)}
      <h2>Home</h2>
    </div>
  );
};

const aboutView = (s) => {
  return (
    <h2>About</h2>
  )
}
const topicsView = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/single-state-tree`}>Single State Tree</Link>
      </li>
      <li>
        <Link to={`${match.url}/routing`}>Routing</Link>
      </li>
    </ul>

    {match.isExact && <h3>Please select a topic.</h3>}

    <Route parent path={`${match.path}/:topicId`} render={topicView} />
  </div>
)
const topicView = ({ match }) => {
  return (<h3>{match.params.topicId}</h3>);
}

const a = app({
  actions: {
      location: location.actions,
      up: (event) => (state) => (actions) => {
        console.log(state, actions);
        return ({c:state.c+1})
      },
    },
  state: {
  c: "fff",
  location: location.state
},
  view: (state) => (actions) => {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route path="/" render={homeView(state, actions)} />
        <Route path="/about" render={aboutView} />
        <Route parent path="/topics" render={topicsView} />
      </div>
    );
  }
})

location.subscribe(a.location)

