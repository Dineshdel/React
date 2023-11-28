import React, { useContext } from "react";
import { ShopContext } from "../../Context/shop-context";

const ProductPage = (props) => {
  const {
    id,
    productName,
    price,
    description,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    productsImage,
  } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productsImage} alt="images" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>
          <b>
            {"Description: "}
            {description}
          </b>
        </p>
        <p>
          <b>
            {"DiscountPercentage: "} {discountPercentage}
          </b>
        </p>
        <p>
          <b>
            {"Rating: "}
            {rating}
          </b>
        </p>
        <p>
          <b>
            {"Stock: "}
            {stock}
          </b>
        </p>
        <p>
          <b>
            {"Brand: "}
            {brand}
          </b>
        </p>
        <p>
          <b>
            {"Category: "}
            {category}
          </b>
        </p>
        <p>
          {"Price: "}${price}
        </p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};
export default ProductPage;
