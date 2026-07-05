import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { resolveImageUrl } from '../../config/api';
import remove_icon from '../../../../../BACKEND/public/images/Assets/cart_cross_icon.png';

export const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  const total = getTotalCartAmount();

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        const itemId = e.id || e._id;
        if (cartItems[itemId] > 0) {
          return (
            <div key={itemId}>
              <div className="cartitems-format cartitems-format-main">
                <img src={resolveImageUrl(e.image)} alt={e.name} className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[itemId]}</button>
                <p>${e.new_price * cartItems[itemId]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(itemId) }} alt="Remove" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${total}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <h3>Total</h3>
              <h3>${total}</h3>
            </div>
          </div>
          <button disabled={total === 0}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};