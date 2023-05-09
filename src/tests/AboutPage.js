import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutPage from '../pages/AboutPage';
describe('About page', () => {
    it('render', () => {
        render(React.createElement(AboutPage, null));
        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
    });
});
