import { FETCH_ITEMS } from './index.js';

export function fetchItems(e) {
  return function(dispatch) {
    let location = window.location.pathname;
    if(e) location = e.target.attributes.href.nodeValue;
    fetch('http://localhost:5000/api/getproducts' + location)
    .then( (response) => response.json())
    .then( (data) => {
      dispatch({
        type: FETCH_ITEMS,
        payload: data
      })
    })
  }
}
