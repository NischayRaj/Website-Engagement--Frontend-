import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { MetricsProvider } from './context/MetricsContext';

function App() {
  return (
    <div>
      <Router>
        <MetricsProvider>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
          </Routes>
        </MetricsProvider>
      </Router>
    </div>
  );
}

export default App;
