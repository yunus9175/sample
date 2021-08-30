import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import News from '../newsComponents/News';
import ContainerCompo from '../components';

export default function App(props) {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <News category="general" country="in" pageSize={9} />
          )}
        />

        <Route
          exact
          path="/business"
          component={() => (
            <News category="business" country="in" pageSize={9} />
          )}
        />

        <Route
          exact
          path="/entertainment"
          component={() => (
            <News category="entertainment" country="in" pageSize={9} />
          )}
        />

        <Route
          exact
          path="/health"
          component={() => <News category="health" country="in" pageSize={9} />}
        />

        <Route
          exact
          path="/science"
          component={() => (
            <News category="science" country="in" pageSize={9} />
          )}
        />

        <Route
          exact
          path="/technology"
          component={() => (
            <News category="technology" country="in" pageSize={9} />
          )}
        />

        <Route
          exact
          path="/sports"
          component={() => <News category="sports" country="in" pageSize={9} />}
        />

        <Route exact path="/example" component={ContainerCompo} />
      </Switch>
    </Router>
  );
}
