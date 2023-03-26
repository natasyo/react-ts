import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';
import { FormPage } from './pages/FormPage';
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/form'} element={<FormPage />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
