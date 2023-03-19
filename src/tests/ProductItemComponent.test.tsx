import React from 'react';
import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';
import { ProductItemComponent } from '../components/ProductComponent/ProductItemComponent/ProductItemComponent';
import * as data from '../data/products.json';
import { IProduct } from '../types/iProduct';
describe('Product item', () => {
  it('render', () => {
    render(<ProductItemComponent product={data.products[0] as unknown as IProduct} />);
    expect(screen.getAllByRole('heading', { level: 3 })).toBeDefined();
  });
});
