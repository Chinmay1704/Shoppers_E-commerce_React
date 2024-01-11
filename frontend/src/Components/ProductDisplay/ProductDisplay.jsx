import React, { useContext, useState } from "react";
import "./productDisplay.css";
import StarIcon from "../Assets/star_icon.png";
import Star_Dull_Icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext)

  const [selectedSize, setSelectedSize] = useState('');

  // Function to handle size selection
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // Function to handle adding to cart
  const handleAddToCart = () => {
    // Check if a size is selected
    if (selectedSize) {
      addToCart(product.id, selectedSize);
      // Reset selectedSize after adding to cart if needed
      setSelectedSize('');
    } else {
      // Provide feedback or prevent adding to cart without selecting a size
      alert('Please select a size before adding to cart.');
    }
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>

        <div className="productdisplay-image">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        <div className="productdisplay-right-stars">
          <img src={StarIcon} alt="stars" />
          <img src={StarIcon} alt="stars" />
          <img src={StarIcon} alt="stars" />
          <img src={StarIcon} alt="stars" />
          <img src={Star_Dull_Icon} alt="dull star" />

          <p>(122)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>

          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>

        <div className="productdisplay-right-description">
          A vibrant green T-shirt, reminiscent of lush meadows, features a soft
          cotton fabric with a comfortable fit, perfect for casual and stylish
          everyday wear.
        </div>

        <div className="productdisplay-right-size">
        <h1>Select size</h1>

        <div className="productdisplay-right-sizes">
          {/* Update the onClick event to call handleSizeSelect */}
          <div onClick={() => handleSizeSelect('S')}>S</div>
          <div onClick={() => handleSizeSelect('M')}>M</div>
          <div onClick={() => handleSizeSelect('L')}>L</div>
          <div onClick={() => handleSizeSelect('XL')}>XL</div>
          <div onClick={() => handleSizeSelect('XXL')}>XXL</div>
        </div>
      </div>

        {/* <div className="productdisplay-right-size">
          <h1>Select size</h1>

          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div> */}

        <button onClick={handleAddToCart}>Add To Cart</button>

        <p className="productdisplay-right-category">
          <span>Category : </span>Women, T-Shirt, CropTop
        </p>

        <p className="productdisplay-right-category">
          <span>Tags : </span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
