// ToggleComponent.js
import React from "react";

const Navbar = ({ activeTab, onToggle }) => {
  return (
    <div className="flex justify-center items-center font-mono ">
      <button
        className={`mx-2 p-2 cursor-pointer ${
          activeTab === "home" ? "font-bold" : ""
        }`}
        onClick={() => onToggle("home")}
      >
        Home
      </button>
      <button
        className={`mx-2 p-2 cursor-pointer ${
          activeTab === "featured" ? "font-bold" : ""
        }`}
        onClick={() => onToggle("featured")}
      >
        Featured
      </button>
    </div>
  );
};

export default Navbar;
