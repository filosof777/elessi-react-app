import React from "react";
import { topCategories } from "../../../../Data/products";

import classes from "./TopCategories.module.scss";

function TopCategories() {
  return (
    <div className={classes.TopCategories}>
      <div className="container">
        <div className={classes.Wrapper}>
          <h4>top categories</h4>
          <ul>
            {topCategories.map((item) => {
              return (
                <li key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopCategories;
