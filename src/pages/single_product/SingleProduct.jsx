import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectId, apiUrl } from "../../helper/projectData";
import "./SingleProduct.css";
import Loader from "../../components/loader/Loader";
import BottomNavbar from "../../components/navbar/bottom/BottomNavbar";

export default function SingleProduct() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [mainImage, setMainImage] = useState(0);
  const { _id } = useParams();
  const {
    images = [""],
    name,
    brand,
    subCategory,
    price,
    size = [""],
    description,
    ratings,
    reviews = [""],
  } = product;

  const getSingleProduct = async () => {
    setLoading(true);
    const response = await fetch(`${apiUrl}product/${_id}`, {
      headers: {
        projectId: projectId,
      },
    });
    const jsonData = await response.json();
    setLoading(false);
    setProduct(jsonData.data);
    console.log("product", product);
  };
  useEffect(() => {
    getSingleProduct();
  }, [_id]);

  const resetPageNumber = () => {
    setCurrentPage(1);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <BottomNavbar resetPageNumber={resetPageNumber} />
      <div className="single-product-container">
        <div className="single-product-left">
          <div className="image-grid">
            {images.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                onClick={() => setMainImage(index)}
              />
            ))}
          </div>
          <div className="single-product-main-image">
            <img src={images[mainImage]} alt="" />
          </div>
        </div>
        <div className="single-product-right">
          <div className="single-product-name">
            <h3>
              {name} : {brand}
              {brand}
            </h3>
            <p>
              {subCategory} - ({reviews.length} reviews)
            </p>
          </div>
          <hr />
          <div className="single-product-price">
            <h3>₹{price}</h3>
          </div>
          <div className="single-product-size">
            <p>Please select a size:</p>
            <div className="single-product-size-btns">
              {size.map((size, index) => (
                <button key={index}>{size}</button>
              ))}
            </div>
          </div>
          {/* <AddToCart product={singleProduct} /> */}
          <div className="cart-wishlist-btns">
            <button className="single-product-add-to-wishlist-btn">
              {/* <FaRegHeart size={12} /> */}
              &nbsp;Add to wishlist
            </button>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <h3 className="single-product-description-heading">
              Product Details:
            </h3>
            <p style={{ maxWidth: "600px" }}>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
