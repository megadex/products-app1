import React from 'react';

const Product = props => {
  return (
    <div className="products__item">
      <div
        onClick={() => props.onSelect(props.product)}
        className={props.product === props.selectedProduct
        ? 'product-selected'
        : ''}>
        <div className="product-element">
          <p className="product-element__badge">
            {props.product.id}
          </p>
          <p className="product-element__title">
            {props.product.title}
          </p>
          <p className="product-element__price">
            {props.product.price}
          </p>
          <p className="product-element__description">
            {props.product.description}
          </p>
        </div>
        <div className="product-buttons">
          <button className="product-buttons__edit">
            Edit
          </button>
          <button
            className="product-buttons__delete"
            onClick={e => props.onDelete(e, props.product)}>
            Delete
          </button>
          <button className="product-buttons__to-cart" disabled={props.product.inCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
