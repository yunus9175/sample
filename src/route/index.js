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
        <Route exact path="/">
          <News pageSize={9} country="in" category="general" />
        </Route>
        <Route exact path="/business">
          <News pageSize={9} country="in" category="business" />
        </Route>
        <Route exact path="/entertainment">
          <News pageSize={9} country="in" category="entertainment" />
        </Route>
        <Route exact path="/health">
          <News pageSize={9} country="in" category="health" />
        </Route>
        <Route exact path="/science">
          <News pageSize={9} country="in" category="science" />
        </Route>
        <Route exact path="/technology">
          <News pageSize={9} country="in" category="technology" />
        </Route>
        <Route exact path="/sports">
          <News pageSize={9} country="in" category="sports" />
        </Route>
        <Route exact path="/example" component={ContainerCompo} />
      </Switch>
    </Router>
  );
}
