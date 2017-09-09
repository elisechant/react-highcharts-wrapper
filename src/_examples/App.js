
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import routes from './routesMap';


const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <sidebar>
            <ul>
              {routes.map((r, idx) => ( // hard load each route
                <li key={idx}><a href={r.path}>{r.title}</a></li>
              ))}
            </ul>
          </sidebar>
          <main>
            <Switch>
              <Redirect from="/" to={routes[0].path} exact />
              {routes.map((r, idx) => (
                <Route
                  key={idx}
                  path={r.path}
                  exact={r.exact}
                  component={r.main}
                />
              ))}
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
};

export default App;
