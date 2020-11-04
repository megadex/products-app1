import React from 'react';

const ProductCart = props => {
  return (
    <div className="products__item">
      <div>
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
            {props.product.quantity}
          </p>
          <p className="product-element__description">
            {props.product.description}
          </p>
        </div>
        <div className="product-buttons">
          <button onClick={() => props.onPlus(props.product)}>+1</button>
          <button onClick={() => props.onMinus(props.product)}>-1</button>
          <button
            className="product-buttons__delete"
            onClick={e => props.onDelete(e, props.product)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
