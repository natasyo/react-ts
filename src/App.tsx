import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
