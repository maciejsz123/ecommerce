import React, { Component } from 'react';
import '../styles/favorite.sass';

class FavItem extends Component {
  constructor() {
    super();
    this.state = {
      size: '',
      color: ''
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    let colorObj = this.props.colors.find( (color) => {
      return color.sex === this.props.item.sex && color.name === this.props.item.name
    })
    let colorsTab = [];
    for(let color in colorObj) {
      if(color !== 'name' && color !== 'sex' && colorObj[color] !== 'undefined') {
        colorsTab.push(colorObj[color]);
      }
    }
    let colorMap = colorsTab.map((color, i) => (
      <option key={i} value={color} style={{background: color}}></option>
    ));

    return (
      <div className='align-items-center border bg-light grid-fav'>
        <div>
          <img src={this.props.imgSrc} alt={this.props.item.name} style={{width: '100px'}} />
        </div>
        <div>
          <span>{this.props.item.name}</span>
        </div>
        <div>
          <span>size:
            <select value={this.state.size} onChange={this.handleChange.bind(this)} name='size'>
              <option value=""></option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </span>
        </div>
        <div>
          <span>color:
            <select value={this.state.color} onChange={this.handleChange.bind(this)} name='color' style={{background: this.state.color}}>
              <option value='' style={{background: 'white', padding: '0 10px'}}></option>
              {colorMap}
            </select>
          </span>
        </div>
        <div>
          <span> <s style={{color: 'tomato'}}>{this.props.item.discount ? this.props.item.price.toFixed(2) : ''}</s> <span>{(this.props.item.price - this.props.item.price * this.props.item.discount / 100).toFixed(2)}</span> zł</span>
        </div>
        <div>
          <button type='button' className={'btn btn-info'} disabled={`${(!this.state.color || !this.state.size) ? ' disabled' : ''}`} onClick={() => this.props.addToCart(this.props.item, this.state.size, this.state.color, this.props.postFavorite, this.props.fetchFavorite, this.props.postCart, this.props.fetchCart)}>add to Cart</button>
        </div>
        <div>
          <button type='button' className='btn btn-warning p-2' onClick={() => this.props.removeFavorite(this.props.item.id, this.props.fetchFavorite, this.props.postFavorite)}><span className='close'>&times;</span></button>
        </div>
      </div>
    )
  }
}

export default FavItem;
