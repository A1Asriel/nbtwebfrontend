import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import AuthorizationPage from './pages/Login';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about/" element={<About />} />
          <Route path="login/" element={<AuthorizationPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
