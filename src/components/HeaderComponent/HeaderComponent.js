// @flow
import * as React from 'react';
import { SearchBar } from '../ui/SearchBar/SearchBar';
import './HeaderComponent.scss';
import { Link } from 'react-router-dom';
export class HeaderComponent extends React.Component {
    render() {
        return (React.createElement("header", { className: 'header' },
            React.createElement("div", { className: "container header__container" },
                React.createElement("nav", { className: 'header__menu' },
                    React.createElement(Link, { to: '/', className: 'header__menu-item' }, "Main"),
                    React.createElement(Link, { to: "/about", className: 'header__menu-item' }, "About"),
                    React.createElement(Link, { to: "/form", className: 'header__menu-item' }, "Form")),
                React.createElement(SearchBar, null))));
    }
}
