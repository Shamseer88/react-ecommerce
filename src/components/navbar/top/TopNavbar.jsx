import { NavLink } from "react-router-dom";
import "./TopNavbar.css";
import { apiUrl, projectId } from "../../../helper/projectData.js";

export default function TopNavbar() {
  return (
    <div className="top-navbar">
      <div className="left">
        <NavLink to="/" className="navlink">
          ALL
        </NavLink>
        <NavLink to="/men" className="navlink">
          MEN
        </NavLink>
        <NavLink to="/women" className="navlink">
          WOMEN
        </NavLink>
      </div>
      <div className="right">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
}
