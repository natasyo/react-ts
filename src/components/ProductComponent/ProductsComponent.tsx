// @flow
import * as React from 'react';
import * as data from '../../data/products.json';
import { ProductItemComponent } from './ProductItemComponent/ProductItemComponent';
import { IProduct } from '../../types/iProduct';

import './ProductsComponent.scss';

// type Props = {};
// type State = {};

export function ProductsComponent() {
  return (
    <div className={'products'}>
      {data.products.map((productItem) => (
        <ProductItemComponent
          product={productItem as unknown as IProduct}
          key={productItem.id.toString()}
        />
      ))}
    </div>
  );
}
