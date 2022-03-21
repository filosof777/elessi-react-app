import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function ProductBar({ classes, item }) {
  return (
    <li key={item.id}>
      <div className={classes}>
        <div>
          <img src={item.image} alt="" />
          <button>{item.name}</button>
        </div>
        {item.arrow && (
          <div>
            <MdKeyboardArrowRight />
          </div>
        )}
      </div>
    </li>
  );
}

export default ProductBar;
