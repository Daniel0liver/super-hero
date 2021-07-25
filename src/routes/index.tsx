import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Welcome from 'pages/Welcome';
import Dashboard from 'pages/Dashboard';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default Routes;
