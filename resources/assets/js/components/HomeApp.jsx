import { h, app } from 'hyperapp'
import { router, Link } from "@hyperapp/router"

app(
  {
    view: [
      [
        "/",
        (state, actions) => {
          return (
            <Link to="/test" go={actions.router.go}>
              Test
            </Link>
          )
        }
      ],
      [
        "/test",
        (state, actions) => {
          return (
            <Link to="/" go={actions.router.go}>
              Back
            </Link>
          )
        }
      ]
    ],
    mixins: [router()],
    root: document.getElementById('app')
  }
);

