import React from "react";

function SubCategory({ title, category }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {category.map((item) => {
          return (
            <li key={item.id}>
              <a href="#">{item.text}</a>
              {item.type && <span>new</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SubCategory;
