import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from '../App';
describe('App', () => {
    it('render', () => {
        render(React.createElement(BrowserRouter, null,
            React.createElement(App, null)));
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Main page');
    });
});
