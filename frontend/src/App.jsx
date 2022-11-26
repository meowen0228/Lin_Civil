// React
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

// CSS
import 'antd/dist/reset.css';
import './style/customANTD.scss';
import './style/globalStyle.scss';

// Page
import Login from './page/Login/Login';
import Home from './page/HomePage/Home';
import CableHolePage from './page/CableHolePage/CableHolePage'

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.common.Authorization = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="/home/cable_hole" element={<CableHolePage />} />
        <Route path="/home/test" element={<CableHolePage />} />
      </Route>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
