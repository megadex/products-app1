import React, {Component} from 'react';
import { connect } from 'react-redux';
import actions from './../store/actions';

import ProductCart from './ProductCart';

import api from './../api';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // productsCart: [],
      cnt: 0,
      price: 10,
      total: 1
    }

    this.handleDelete = this
      .handleDelete
      .bind(this);
    this.handlePlus = this
      .handlePlus
      .bind(this);
    this.handleMinus = this
      .handleMinus
      .bind(this);
  }

  componentDidMount() {
    api
      .getCart()
      .then(json => {
        const productsCart = json;
        this.props.onGet(productsCart);
      });

    /*
    api
      .getCart()
      .then(json => this.setState({productsCart: json}));
    */
  }

  handlePlus(product) {
    this.setState({
      cnt: product.quantity++
    });
  }

  handleMinus(product) {
    if (product.quantity > 1) {
      this.setState({
        cnt: product.quantity--
      });
    }
  }

  /* handleTotal() {
    let productsCart = [...this.state.productsCart];
    let total = productsCart.reduce((t, p) => t + p.price * p.quantity, 0);
    this.setState({ total: total });
    console.log(productsCart);
  } */

  handleDelete(event, product) {
    event.stopPropagation();

    api
      .destroyCart(product)
      .then(() => {
        /*
        let products = this.state.products;
        products = products.filter(h => h !== product);
        this.setState({productsCart: products});
        */

        this.props.onDel(product);
      });

    this
      .props
      .history
      .push("/");
  }

  render() {
    const renderProducts = this
      .props
      .productsCart
      .map(product => {
        return (<ProductCart
          key={product.id}
          product={product}
          onDelete={this.handleDelete}
          onPlus={this.handlePlus}
          onMinus={this.handleMinus}/>);
      });

    return (
      <div className="wrapper">
        <h1>Cart page</h1>
        <div className="products">
          {renderProducts}
        </div>
        <div>
          <div>{this.state.total}</div>
          <div>Total: {/* () => this.handleTotal() */}</div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    productsCart: state.cart.productsCart
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    onGet: (is) => dispatch(actions.cart.get(is)),
    onDel: (i) => dispatch(actions.cart.remove(i))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);