import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInUpForm from './assetes/scriptForms/SignInUpForm';
import WelcomePage from './assetes/scriptForms/WelcomePage';

function App() {
  return (
    <Router>
      <div>
        <Helmet>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        
        </Helmet>
        <Routes>
          <Route path="/" element={<SignInUpForm />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
