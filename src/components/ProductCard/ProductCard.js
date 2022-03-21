import React, { useState } from "react";
import classes from "./ProductCard.module.scss";
import { AiOutlineHeart, AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/store";

function ProductCard({ item, style }) {
  const [product, setProduct] = useState(false);
  const dispatch = useDispatch();

  const saleStyle = {
    fontSize: "13px",
    textDecoration: "line-through",
  };

  function wishListHandler(params) {
    if (!product) {
      dispatch(addItem(item));
      setProduct(true);
    }
  }

  return (
    <div className={classes.ProductCard}>
      <div>
        {item.sale ? (
          <span className={classes.Wrapper}>{item.salePercent}%</span>
        ) : null}
        <span className={classes.Wiew}>
          <AiOutlineEye />
        </span>
        <span className={classes.Bag}>
          <BsHandbag />
        </span>
        <a
          className={classes.Wishlist}
          style={product ? { color: "red" } : null}
          onClick={wishListHandler}
        >
          {product ? <AiFillHeart /> : <AiOutlineHeart />}
        </a>
        <img className={classes.Image} src={item.img} alt={item.name} />
        <img src={item.img2} alt={item.name} />
      </div>
      {!style ? (
        <>
          <h3>{item.name}</h3>
          <div className={classes.Inner}>
            <p
              style={item.sale ? saleStyle : null}
            >
              €{item.price}
            </p>
            {item.sale ? (
              <span>
                €{item.saleCount}
              </span>
            ) : null}
          </div>
        </>
      ) : null}
    </div>
  );
}
export default ProductCard;
