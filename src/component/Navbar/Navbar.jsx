import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        width: "100%",
        height: "50px",
        justifyContent: "end",
        padding: "10px",
      }}
    >
      <button
        style={{
          cursor: "pointer",
          padding: "15px",
          marginRight: "25px",
          border: "none",
          fontWeight: "600",
          border: "3px solid whitesmoke",
        }}
      >
        Log In
      </button>
    </div>
  );
};

export default Navbar;
