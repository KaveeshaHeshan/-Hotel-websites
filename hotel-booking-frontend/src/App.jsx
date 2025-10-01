// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/layout/Layout';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;