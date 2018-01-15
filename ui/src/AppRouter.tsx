import * as React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';

const AppRouter = () => (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/login" component={Login} />
        <Route exact={true} path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
);

export default AppRouter;