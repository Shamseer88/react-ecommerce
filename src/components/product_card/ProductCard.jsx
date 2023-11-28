import { NavLink } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { _id, displayImage, name, brand, price } = product;
  return (
    <NavLink to={`/product/${_id}`} className="product-card-navlink">
      <div className="product-card">
        <div className="product-card-image">
          <img src={displayImage} alt={name} />
        </div>
        <div className="product-card-brand">
          <p>BRAND: {brand}</p>
        </div>
        <div className="product-card-name">
          <p>{name}</p>
        </div>
        <div className="product-card-price">
          <h6>₹ {price}</h6>
        </div>
      </div>
    </NavLink>
  );
}
