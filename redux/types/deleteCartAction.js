export function deleteCart(id) {
  return function(dispatch) {
    let fetchPromise = fetch('http://localhost:5000/api/deleteproduct/cart', {
      method: 'delete',
      body: JSON.stringify({
        id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res)
    return fetchPromise;
  }
}
