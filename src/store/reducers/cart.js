let initialState = {
    productsCart: [] // getProducts()
};

function get(state, payload) {
    let productsCart = payload;

    return {
        ...state,
        productsCart
    }
}

function remove(state, pdel) {
    let productsCart = [...state.productsCart].filter((p) => p !== pdel);
    return {
        ...state,
        productsCart
    }
}

let reducer = function(state = initialState, action) {
    switch (action.type) {
        case 'PRODUCT_GET':
            return get(state, action.items);
        case 'PRODUCT_REMOVE':
            return remove(state, action.i);
            // break;
        default:
            return state;
    }
}

export default reducer;