import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '/imports/ui/pages/login-page/LoginPage.jsx';

export const renderRoutes = () => (
  <Switch>
    <Route exact path="/login" element={<LoginPage />} />
  </Switch>
);
