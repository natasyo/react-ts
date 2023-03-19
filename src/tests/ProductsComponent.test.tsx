import React from 'react';
import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';
import { ProductsComponent } from '../components/ProductComponent/ProductsComponent';
describe('Products component', () => {
  it('render', () => {
    render(<ProductsComponent />);
    expect(screen.getAllByRole('heading', { level: 3 })).toBeDefined();
  });
});
