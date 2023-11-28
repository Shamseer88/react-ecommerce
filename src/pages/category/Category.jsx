import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import ProductList from "../../components/product_list/ProductList";
import { projectId, apiUrl } from "../../helper/projectData";
import Pagination from "../../components/pagination/Pagination";
import BottomNavbar from "../../components/navbar/bottom/BottomNavbar";

export default function Category() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [currentPage, setCurrentPage] = useState(1);
  const getProducts = async () => {
    setLoading(true);
    const response = await fetch(
      `${apiUrl}clothes/products?filter={%22subCategory%22%3A%22${category}%22}&page=${currentPage}`,
      {
        headers: {
          projectId: projectId,
        },
      }
    );
    const jsonData = await response.json();
    setLoading(false);
    setProducts(jsonData.data);
    console.log(products);
  };
  useEffect(() => {
    getProducts(currentPage);
  }, [currentPage, category]);

  const resetPageNumber = () => {
    setCurrentPage(1);
  };

  const handlePreviousBtn = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  const handleNextBtn = () => {
    if (products.length < 20) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };
  if (loading) {
    return <Loader />;
  }
  console.log(category);
  return (
    <div>
      <BottomNavbar resetPageNumber={resetPageNumber} />
      <ProductList products={products} />
      <Pagination
        handlePreviousBtn={handlePreviousBtn}
        handleNextBtn={handleNextBtn}
        pageNumber={currentPage}
      />
    </div>
  );
}
