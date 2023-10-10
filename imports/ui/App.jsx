import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login-page/LoginPage';
import HomePage from './pages/home-page/HomePage';


const App = () => {
  return (
  <Router>
    <Routes>
        <Route exact path="/login" element={<LoginPage/>} />
        <Route exact path="/"  element={<HomePage/>} />
    </Routes>
  </Router>)
};

export default App;
