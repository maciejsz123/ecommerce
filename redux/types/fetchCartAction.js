import { FETCH_CART } from './index';

export function fetchCart() {
  return function(dispatch) {
    let fetchCart =  fetch('http://localhost:5000/api/getproducts/cart')
    .then( response => response.json())
    .then( (data) => {
      dispatch({
        type: FETCH_CART,
        payload: data
      })
    })
    return fetchCart;
  }
}
