import React, { useContext } from "react";
import "./cartitem.css";
import { ShopContext } from "../../Context/ShopContext";
import RemoveIcon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const {getTotalCartAmount, AllProducts, cartItem, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Size</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      {AllProducts.map((e) => {
        if (cartItem[e.id] > 0) {
          return ( 
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img className="cartitem-product-icon" src={e.image} alt="" />

                <p>{e.name}</p>
                <p>{cartItem.size}</p>
                <p>${e.new_price}</p>

                <button className="cartitems-quantity">{cartItem[e.id]}</button>

                <p>${e.new_price * cartItem[e.id]}</p>

                <img
                className="cartitems-remove-icon"
                  src={RemoveIcon}
                  alt="remove"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
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
                    <p>${getTotalCartAmount()}</p>
                </div>

                <hr />

                <div className="cartitems-total-item">
                    <p>Shipping fee</p>
                    <p>free</p>
                </div>

                <hr />

                <div className="cartitems-total-item">
                    <p>Total</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
            </div>

            <button>Proceed to Checkout</button>
        </div>

        <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>

            <div className="cartitem-promobox">
                <input type="text"  placeholder="Promo Code" />

                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
