import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import React, { ChangeEvent, useState } from 'react';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';
import { FormPage } from './pages/FormPage';
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';

function App() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  function searchCharacter(event: ChangeEvent) {
    setSearch((event.target as HTMLInputElement).value);
    navigate(`/?search=${search}`);
  }
  return (
    <div className="App">
      <HeaderComponent onSearch={searchCharacter} />
      <Routes>
        <Route path={'/'} element={<MainPage search={search} />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/form'} element={<FormPage />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
