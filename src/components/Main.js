import React, {Component} from 'react';
import { connect } from 'react-redux';
import actions from './../store/actions';

import Product from './Product';
import Pagination from './Pagination';
// import Edit from './Edit';

import api from './../api';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // products: props.products,
      currentPage: 1,
      productsPerPage: 10
      // addingProduct: false
    };

    this.handleEnableAddMode = this
      .handleEnableAddMode
      .bind(this);
    this.handleDelete = this
      .handleDelete
      .bind(this);
    /* this.handleSave = this
      .handleSave
      .bind(this);
    this.handleOnChange = this
      .handleOnChange
      .bind(this);
    this.handleCancel = this
      .handleCancel
      .bind(this);
    this.handleSelect = this
      .handleSelect
      .bind(this); */
  }

  componentDidMount() {
    api
      .get()
      .then(json => {
        const products = json;
        this.props.onGet(products);
      });

    /*
    api
      .get()
      .then(json => this.setState({products: json}));
    */
  }

  /* handleSelect(product) {
    this.setState({selectedProduct: product});
  } */

  handleEnableAddMode() {
    /* this.setState({
      addingProduct: true,
      selectedProduct: {
        title: '',
        price: '',
        description: '',
        inCart: false
      }
    }); */
    this.props.addMode();

    this.props.history.push('/edit');
  }

  /*
  handleCancel() {
    this.setState({addingProduct: false, selectedProduct: null});
  }

  handleSave() {
    let products = this.state.products;

    if (this.state.addingProduct) {
      api
        .create(this.state.selectedProduct)
        .then(result => {
          console.log('Successfully created!');

          products.push(this.state.selectedProduct);
          this.setState({products: products, selectedProduct: null, addingProduct: false});
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      api
        .update(this.state.selectedProduct)
        .then(() => {
          this.setState({selectedProduct: null});
        })
        .catch(err => {});
    }
  }

  handleOnChange(event) {
    let selectedProduct = this.state.selectedProduct;
    selectedProduct[event.target.name] = event.target.value;
    this.setState({selectedProduct: selectedProduct});
  }
  */

  handleDelete(event, product) {
    event.stopPropagation();

    api
      .destroy(product)
      .then(() => {
        /*
        let products = this.state.products;
        products = products.filter(h => h !== product);
        this.setState({products: products});
        */
        this.props.onDel(product);

        /* if (this.selectedProduct === product) {
          this.setState({selectedProduct: null});
        } */
      });
  }

  handleFilter = (valueM) => {
    // event.preventDefault();
    
    // let value = event.target.value;
    let value = valueM.trim().toLowerCase();
    this.setState({valueFilter: value});

    if (value === '') {
      api
      .get()
      .then(json => {
        const products = json;
        this.props.onGet(products);
      });
    } else {
      this.props.onFilter(value);
    }
  }

  render() {
    const {currentPage, productsPerPage} = this.state;
    const products = [...this.props.products];
    console.log('[p]', products);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const renderProducts = currentProducts.map(product => {
      return (<Product
        key={product.id}
        product={product}
        onSelect={this.props.onSelect}
        onDelete={this.handleDelete}
        selectedProduct={this.props.selectedProduct}/>);
    });

    const paginate = (pageNumber) => this.setState({currentPage: pageNumber});

    return (
      <div className="wrapper">
        <h1>Main page</h1>
        <div>
          <button type="button" onClick={() => this.handleEnableAddMode()}>Create</button>
        </div>
        <label>
          Title
        </label>
        <input type="text" name="filter" onChange={(e) => this.handleFilter(e.target.value)} placeholder="Filter" className="filter"/>
        <div className="products">
          {renderProducts}
        </div>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}/>

      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    products: state.main.products,
    selectedProduct: state.main.selectedProduct
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    onGet: (is) => dispatch(actions.main.get(is)),
    onDel: (i) => dispatch(actions.main.remove(i)),
    onFilter: (i) => dispatch(actions.main.filter(i)),
    onSelect: (i) => dispatch(actions.main.select(i)),
    addMode: () => dispatch(actions.main.addMode())

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);