import React from "react";
import "./Header.css";
import Sidebar from "./Sidebar";

const Header = ({ setCategory }) => {
  return (
    <div className="header">
      <div className="icon">
        <Sidebar setCategory={setCategory} />
      </div>
      <img
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt="inshorts"
      />
    </div>
  );
};

export default Header;
