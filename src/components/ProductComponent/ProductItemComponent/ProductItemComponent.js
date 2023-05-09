import './ProductItemComponent.scss';
// @flow
import * as React from 'react';
export class ProductItemComponent extends React.Component {
    render() {
        return (React.createElement("div", { className: 'product-item' },
            React.createElement("div", { className: "product-item__thumbnail" },
                React.createElement("img", { src: this.props.product.thumbnail, alt: this.props.product.title })),
            React.createElement("h3", { className: "product-item__title" }, this.props.product.title),
            React.createElement("div", { className: "product-item__desc" }, this.props.product.description),
            React.createElement("div", { className: "product-item__price-block" },
                React.createElement("p", { className: "product-item__price" },
                    "$",
                    this.props.product.price))));
    }
}
