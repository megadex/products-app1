
let initialState = {
    products: [] // getProducts()
};

function get(state, payload) {
    let products = payload;

    return {
        ...state,
        products
    }
}

function remove(state, pdel) {
    let selectedProduct;
    let products = [...state.products].filter((p) => p !== pdel);

    if (state.selectedProduct === pdel) {
        selectedProduct = null;
    }
    
    return {
        ...state,
        products,
        selectedProduct
    }
}

function filter(state, pfilter) {
    let products = [...state.products].filter((p) => p.title.toLowerCase().includes(pfilter)); // indexOf(pfilter) !== -1
    
    return {
        ...state,
        products
    }
}

function select(state, payload) {
    let selectedProduct = payload;

    return {
        ...state,
        selectedProduct
    }
}

function addMode(state) {
    let addingProduct = true;
    let selectedProduct = {
        title: '',
        price: '',
        description: '',
        inCart: false
      };

    return {
        ...state,
        addingProduct,
        selectedProduct
    }
}

function cancel(state) {
    let selectedProduct = {
        title: '',
        price: '',
        description: '',
        inCart: false
      };

    return {
        ...state,
        selectedProduct
    }
}

function create(state) {
    let products = [...state.products].push(state.selectedProduct),
    addingProduct = false,
    selectedProduct = null;
  
    return {
        ...state,
        products,
        addingProduct,
        selectedProduct
    }
}

function update(state) {
    let selectedProduct = null;
  
    return {
        ...state,
        selectedProduct
    }
}

function change(state, event) {
    let selectedProduct = {...state.selectedProduct};
    selectedProduct[event.target.name] = event.target.value;

    return {
        ...state,
        selectedProduct
    }
}

let reducer = function(state = initialState, action) {
    switch (action.type) {
        case 'PRODUCT_GET':
            return get(state, action.items);
        case 'PRODUCT_REMOVE':
            return remove(state, action.i);
        case 'PRODUCT_FILTER':
            return filter(state, action.i);
        case 'PRODUCT_SELECT':
            return select(state, action.i);
        case 'PRODUCT_ADD_MODE':
            return addMode(state);
        case 'PRODUCT_CANCEL':
            return cancel(state);
        case 'PRODUCT_CREATE':
            return create(state);
        case 'PRODUCT_UPDATE':
            return update(state);
        case 'PRODUCT_CHANGE':
            return change(state, action.e);
            // break;
        default:
            return state;
    }
}

export default reducer;

/*
function getProducts() {
    return [
        {
            "id": "bix27468fjc",
            "title": "Audi",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, qui?",
            "price": 100,
            "inCart": true
          },
          {
            "id": "BMW",
            "title": "iphone 5c",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, qui?",
            "price": 150,
            "inCart": false
          },
          {
            "id": "ox98i1f5idg",
            "title": "Citroen",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, qui?",
            "price": 200,
            "inCart": false
          }
    ]
}
*/