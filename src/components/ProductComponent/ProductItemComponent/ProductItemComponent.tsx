import './ProductItemComponent.scss';

// @flow
import * as React from 'react';
import { IProduct } from '../../../types/iProduct';

// type State = {};
type Props = {
  product: IProduct;
};

export function ProductItemComponent(props: Props) {
  return (
    <div className={'product-item'}>
      <div className="product-item__thumbnail">
        <img src={props.product.thumbnail} alt={props.product.title} />
      </div>
      <h3 className="product-item__title">{props.product.title}</h3>
      <div className="product-item__desc">{props.product.description}</div>
      <div className="product-item__price-block">
        <p className="product-item__price">${props.product.price}</p>
      </div>
    </div>
  );
}
