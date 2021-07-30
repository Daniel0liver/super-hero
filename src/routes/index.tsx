import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Welcome from 'pages/Welcome';
import Dashboard from 'pages/Dashboard';

import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default Routes;
