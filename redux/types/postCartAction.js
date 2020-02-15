export function postCart(item, size, color) {
  return function(dispatch) {
      let fetchCart = fetch('http://localhost:5000/api/postproducts/cart', {
      method: 'post',
      body: JSON.stringify({
        item,
        size,
        color
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res);
    return fetchCart;
  }
}
