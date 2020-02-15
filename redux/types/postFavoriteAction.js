export function postFavorite(id) {
  return function(dispatch) {
      let fetchFav = fetch('http://localhost:5000/api/postproducts/favorite', {
      method: 'post',
      body: JSON.stringify({
        id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res);
    return fetchFav;
  }
}
