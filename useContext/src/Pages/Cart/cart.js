import React, { useContext } from "react";
import { Products } from "../../products";
import { ShopContext } from "../../Context/shop-context";
import CartItems from "./cartitem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart">
        {Products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>SubTotal : ${totalAmount}</p>
          <button onClick={() => navigate("/")}> Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <div className="empty-cart"></div>
      )}
    </div>
  );
};

export default Cart;
