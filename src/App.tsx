import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout, EstimateRequestPage } from './pages';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<EstimateRequestPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
