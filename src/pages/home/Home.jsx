import React, { useEffect, useState } from "react";
import { projectId, apiUrl } from "../../helper/projectData";
import ProductList from "../../components/product_list/ProductList";
import Loader from "../../components/loader/Loader";
import Pagination from "../../components/pagination/Pagination";
import BottomNavbar from "../../components/navbar/bottom/BottomNavbar";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [currentPage, setCurrentPage] = useState(1);
  const getProducts = async () => {
    setLoading(true);
    const response = await fetch(
      `${apiUrl}clothes/products?page=${currentPage}`,
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

  useEffect(() => {
    getProducts();
  }, [currentPage]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="home">
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
