import React from 'react';

const Edit = props => {
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
              onChange={props.onChange}/>
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
        <button onClick={props.onSave}>Save</button>
      </div>
    );
  } else {
    return <div/>;
  }
};

export default Edit;