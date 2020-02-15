import { FETCH_FAVORITE } from './index';

export function fetchFavorite() {
  return function(dispatch) {
    return fetch('http://localhost:5000/api/getproducts/favorite')
    .then( response => response.json())
    .then( (data) => {
      dispatch({
        type: FETCH_FAVORITE,
        payload: data
      })
    })
  }
}
