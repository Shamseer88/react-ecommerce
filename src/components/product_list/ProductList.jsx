import ProductCard from "../product_card/ProductCard";
import "./ProductList.css";

export default function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
