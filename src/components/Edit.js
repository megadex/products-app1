import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import actions from './../store/actions';

import api from './../api';



const Edit = (props) => {
  useEffect(() => {
    
  });

  /* function onCancel() {
    this.setState({addingProduct: false, selectedProduct: null});
  } */

  function onSave() {
    if (props.addingProduct) {
      api
        .create(props.selectedProduct)
        .then(result => {
          console.log('Successfully created!');
  
          props.onCreate();
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      api
        .update(props.selectedProduct)
        .then(() => {
          props.onUpdate();
        })
        .catch(err => {});
    }

    props.history.push('/');
  }
  
  /* function onChange(event) {
    let selectedProduct = this.state.selectedProduct;
    selectedProduct[event.target.name] = event.target.value;
    this.setState({selectedProduct: selectedProduct});
  } */

  if (props.selectedProduct) {
    return (
      <div className="wrapper">
        <h1>Edit page</h1>
        <div className="editfields">
          <div>
            <label>id:
            </label>
          </div>
          <div>
            <label>Title:
            </label>
            <input
              name="title"
              value={props.selectedProduct.title}
              placeholder="title"
              onChange={(e) => props.onChange(e)}/>
          </div>
          <div>
            <label>Price:
            </label>
            <input
              type="number"
              name="price"
              placeholder="price"
              value={props.selectedProduct.price}
              onChange={props.onChange}/>
          </div>
          <div>
            <label>Description:
            </label>
            <input
              name="description"
              value={props.selectedProduct.description}
              placeholder="description"
              onChange={props.onChange}/>
          </div>
        </div>
        <button onClick={props.onCancel}>Cancel</button>
        <button onClick={onSave}>Save</button>
      </div>
    );
  } else {
    return <div className="wrapper">
        <button type="button" onClick={props.addMode}>Create</button>
      </div>;
  }
};

let mapStateToProps = (state) => {
  return {
    addingProduct: state.main.addingProduct,
    selectedProduct: state.main.selectedProduct
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    onCancel: () => dispatch(actions.main.cancel()),
    onCreate: () => dispatch(actions.main.create()),
    onUpdate: () => dispatch(actions.main.update()),
    // onSave: (a,s) => dispatch(actions.main.save(a,s)),
    onChange: (e) => dispatch(actions.main.change(e)),
    addMode: () => dispatch(actions.main.addMode())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);