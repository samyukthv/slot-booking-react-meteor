import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login-page/LoginPage';
import HomePage from './pages/home-page/HomePage';
import UserPublicRoutes from './routing/publicRoute';
import UserProtectedRoutes from './routing/protectedRoutes';


const App = () => {
  return (
  <Router>
    <Routes>
        <Route exact path="/login" element={<UserPublicRoutes><LoginPage/></UserPublicRoutes>} />
        <Route exact path="/"  element={<UserProtectedRoutes><HomePage/></UserProtectedRoutes>} />
    </Routes>
  </Router>)
};

export default App;
