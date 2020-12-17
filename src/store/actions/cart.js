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