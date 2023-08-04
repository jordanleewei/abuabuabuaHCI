import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes.jsx';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <Router>
    <ToastContainer />
      <Routes />
    </Router>
  );
};

export default App;