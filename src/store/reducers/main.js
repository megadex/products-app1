import api from './../../api';

let initialState = {
    products: []
};

function remove(state, i) {
    let products = [...state.products].filter((el, index) => index !== i);

    return {
        ...state,
        products
    }
}

let reducer = function(state = initialState, action) {
    switch (action.type) {
        case 'PRODUCT_REMOVE':
            return remove(state, action.i);
            // break;
        default:
            return state;
    }
}

export default reducer;

function getProducts() {
    let products;
    api
      .get()
      .then(function(json) {
        products = json;
        console.log('op',products);
      });
      console.log(products);
}
getProducts();
// console.log('op',getProducts());