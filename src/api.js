const baseAPI = 'http://localhost:3000';

const productService = {
  get() {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/products`)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  create(product) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/products`, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => result.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  update(product) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/products/${product.id}`, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  destroy(product) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/products/${product.id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  getCart() {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/cart`)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  createCart(product) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/products`, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => result.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  updateCart(product) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/cart/${product.id}`, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  destroyCart(product) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/cart/${product.id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default productService;
