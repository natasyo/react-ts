import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';
import { FormPage } from './pages/FormPage';
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(HeaderComponent, null),
        React.createElement(Routes, null,
            React.createElement(Route, { path: '/', element: React.createElement(MainPage, null) }),
            React.createElement(Route, { path: '/about', element: React.createElement(AboutPage, null) }),
            React.createElement(Route, { path: '/form', element: React.createElement(FormPage, null) }),
            React.createElement(Route, { path: '*', element: React.createElement(NotFoundPage, null) }))));
}
export default App;
