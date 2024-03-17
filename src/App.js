import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import DashboardDark from './components/DashboardDark';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [activePage, setActivePage] = useState('dashboard');

  useEffect(() => {
    //const bodyElement = document.getElementsByTagName('body')[0];
    if (activePage === 'dashboardDark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [activePage]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPreloader(false);
    }, 2000)
  }, []);
  return (
    <div className="wrapper">
      {/* Preloader */}
      {showPreloader && <div className="preloader flex-column justify-content-center align-items-center">
        <img className="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60" />
      </div>}
      <Navbar />
      <Sidebar />
      {activePage === 'dashboard' ? <Dashboard /> : <DashboardDark />}
      <Footer />
    </div>

  );
}

export default App;
