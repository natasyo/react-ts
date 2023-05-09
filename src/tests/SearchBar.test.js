import React from 'react';
import { describe, expect, it } from 'vitest';
import { SearchBar } from '../components/ui/SearchBar/SearchBar';
import { render, screen } from '@testing-library/react';
describe('SearchBar', () => {
    it('render', () => {
        render(React.createElement(SearchBar, null));
        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    });
});
