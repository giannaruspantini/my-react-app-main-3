import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EngagingContent from './components/EngagingContent';
import ProvisioningExamples from './components/ProvisioningExamples';
import RequestLoader from './components/RequestLoader';
import Newsletter from './components/Newsletter';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile'; // Import your Profile component
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component
import './styles.css';

// Component to conditionally render Navbar based on route
const Layout = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup'];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
        <Route path="/" element={
          <>
            <Hero />
            <EngagingContent />
            <ProvisioningExamples />
            <RequestLoader />
            <Newsletter />
          </>
        } />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;

