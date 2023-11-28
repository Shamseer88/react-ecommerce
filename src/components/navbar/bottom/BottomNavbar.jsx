import React, { useEffect, useState } from "react";
import { apiUrl, projectId } from "../../../helper/projectData.js";
import { NavLink } from "react-router-dom";
import "./BottomNavbar.css";

export default function BottomNavbar({ resetPageNumber }) {
  const [categoryList, setCategoryList] = useState([]);
  console.log(apiUrl);
  const getCategoryList = async () => {
    try {
      const response = await fetch(`${apiUrl}clothes/categories`, {
        headers: {
          projectId: projectId,
        },
      });
      const jsonData = await response.json();
      setCategoryList(jsonData.data);
      console.log(categoryList);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCategoryList();
  }, []);
  return (
    <div className="bottom-navbar">
      <ul>
        {categoryList.map((category) => (
          <li key={category} onClick={resetPageNumber}>
            <NavLink to={`/category/${category}`} className="right-menu-item">
              {category}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
