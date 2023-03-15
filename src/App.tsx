import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import './App.css';
import React from 'react';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
