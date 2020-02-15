import { FETCH_DETAIL } from './index'

export function fetchDetail() {
  return function(dispatch) {
    return fetch('http://localhost:5000/api/details/' + window.location.pathname.slice(9))
    .then( response => response.json())
    .then( data => {
      dispatch({
        type: FETCH_DETAIL,
        payload: data
      })
    })
  }
}
