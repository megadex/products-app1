// import api from './../../api';

export const get = (items) => {
    return {
        type: 'PRODUCT_GET',
        items
    }
}

export const remove = (i) => {
    return {
        type: 'PRODUCT_REMOVE',
        i
    };
}

export const filter = (i) => {
    return {
        type: 'PRODUCT_FILTER',
        i
    };
}

export const select = (i) => {
    return {
        type: 'PRODUCT_SELECT',
        i
    };
}

export const addMode = () => {
    return {
        type: 'PRODUCT_ADD_MODE'
    };
}

export const cancel = () => {
    return {
        type: 'PRODUCT_CANCEL'
    };
}
/*
export const save = (addingProduct, selectedProduct) => {
  return (dispatch) => {
    if (addingProduct) {
      api
        .create(selectedProduct)
        .then(result => {
          console.log('Successfully created!');
  
          dispatch(create());
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      api
        .update(selectedProduct)
        .then(() => {
            dispatch(update());
        })
        .catch(err => {});
    }
  }
}
*/
export const create = () => {
    return {
        type: 'PRODUCT_CREATE'
    };
}

export const update = () => {
    return {
        type: 'PRODUCT_UPDATE'
    };
}

export const change = (e) => {
    return {
        type: 'PRODUCT_CHANGE',
        e
    };
}