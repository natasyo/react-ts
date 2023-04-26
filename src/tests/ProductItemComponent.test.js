import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductItemComponent } from '../components/ProductComponent/ProductItemComponent/ProductItemComponent';
import * as data from '../data/products.json';
describe('Product item', () => {
    it('render', () => {
        render(React.createElement(ProductItemComponent, { product: data.products[0] }));
        expect(screen.getAllByRole('heading', { level: 3 })).toBeDefined();
    });
});
