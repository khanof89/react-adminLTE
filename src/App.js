import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import DashboardDark from './components/DashboardDark';
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from './components/Layout';
import theme from './helpers/theme';
import { ThemeContext } from './components/Contexts/ThemeContext';

function App() {
  const [activePage, setActivePage] = useState('dashboardDark');
  const [currentTheme, setCurrentTheme] = useState('light');
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === '/dashboard') {
      setCurrentTheme(theme.light);
      console.log(theme.dark.body);
      document.body.classList.remove(theme.dark.body);
    } else {
      setCurrentTheme(theme.dark);
      document.body.classList.add(theme.dark.body);
    }
  }, [location]);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" index element={<Dashboard />} />
          <Route path="dashboard-dark" element={<DashboardDark />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
