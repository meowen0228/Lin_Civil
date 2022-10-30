import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// page
import Login from './page/Login';
import Home from './page/Home';
import Test from './page/Test';

function App() {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="atest" element={<Test />} />
      </Route>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
