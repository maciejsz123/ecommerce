import { FETCH_COLORS } from './index';

export function fetchColors() {
  return function(dispatch) {
    fetch('http://localhost:5000/api/getcolors/')
    .then( (response) => response.json())
    .then( (data) => {
      dispatch({
        type: FETCH_COLORS,
        payload: data
      })
    })

  }
}
