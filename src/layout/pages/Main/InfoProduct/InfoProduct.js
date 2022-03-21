import { useState } from "react";
import classes from "./InfoProduct.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { allProducts } from "../../../../Data/categories";
import ProductCard from "../../../../components/ProductCard/ProductCard";

function InfoProduct() {
  const saleProducts = allProducts.filter((item) => item.sale);
  const [sliderTransform, setSliderTransform] = useState(0);
  const [sliderBarTransform, setSliderBarTransform] = useState(0);

  const saleStyle = {
    fontSize: "13px",
    textDecoration: "line-through",
  };

  function sliderHandler(val) {
    setSliderTransform((val % saleProducts.length) * 817);
    setSliderBarTransform((val % saleProducts.length) * 175);
  }

  return (
    <div className={classes.InfoProduct}>
      <div className="container">
        <div className={classes.Box}>
          <div className={classes.Wrapper}>
            <div
              className={classes.Slider}
              style={{ width: `${saleProducts.length * 300}px` }}
            >
              <ul
                className={classes.List}
                style={{ transform: `translateX(-${sliderTransform}px)` }}
              >
                {saleProducts.map((item, index) => (
                  <li key={item.id}>
                    <ProductCard item={item} style={true} />
                    <div className={classes.Wrapper}>
                      <h3 className="sale-prouct__name">{item.name}</h3>
                      <div className={classes.Info}>
                        <span style={saleStyle}>€{item.price}</span>
                        <span className={classes.Price}>€{item.saleCount}</span>
                      </div>
                      <div className={classes.Process}>
                        <span>
                          Available: <strong>75</strong>
                        </span>
                        <span>
                          Already Sold: <strong>25</strong>
                        </span>
                      </div>
                      <div className={classes.Animation}>
                        <div></div>
                      </div>
                      <div className={classes.Group}>
                        <button
                          value={index - 1}
                          onClick={(e) => sliderHandler(e.target.value)}
                        >
                          <BsChevronLeft  style={{marginRight: '16px'}}/>
                          Prev deal
                        </button>
                        <div></div>
                        <button
                          value={index + 1}
                          onClick={(e) => sliderHandler(e.target.value)}
                        >
                          Next deal <BsChevronRight style={{marginLeft: '16px'}} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={classes.Content}>
            <ul
              style={{ transform: `translateY(-${sliderBarTransform}px)` }}
            >
              {saleProducts.map((item, index) => (
                <li
                  onClick={(e) => sliderHandler(e.target.value)}
                  key={item.id}
                  value={index}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoProduct;
