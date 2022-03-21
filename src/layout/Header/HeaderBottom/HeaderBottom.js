import classes from "./HeaderBottom.module.scss";

import { CgMenu } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import ProductBar from "../../../components/ProductBar";
import { category, header, homePages, nicheLayouts, nicheLayouts2, pages, productFeatures, productPageStyles, productTypes, shop, shopStyles } from "../../../Data/categories";
import SubCategory from "../../../components/SubCategory";

function HeaderBottom() {
  return (
    <div className={classes.HeaderBottom}>
      <div className="container">
        <div className={classes.Wrapper}>
          <div className={classes.Inner}>
            <div className={classes.Categories}>
              <CgMenu />
              <h5>browse categories</h5>
            </div>
            <ul className={classes.CategoriesWrapper}>
              {category.map((item) => {
                return (
                  <ProductBar
                    key={item.id}
                    item={item}
                    classes={classes.Wrapper}
                  />
                );
              })}
            </ul>
          </div>
          <ul className={classes.List}>
            <li className={classes.Item}>
              <button>demo</button>
              <div className={classes.SubCategory}>
                <SubCategory category={homePages} title="Homepages" />
                <SubCategory category={nicheLayouts} title="Niche Layouts" />
                <SubCategory category={nicheLayouts2} title="Niche Layouts" />
               </div>
            </li>
            <li className={classes.Item}>
              <button>shop</button>
              <div className={classes.SubCategory}>
                <SubCategory category={shopStyles} title="Homepages" />
                <SubCategory category={productPageStyles} title="Niche Layouts" />
                <SubCategory category={productTypes} title="Niche Layouts" />
                <SubCategory category={productFeatures} title="Niche Layouts" />
               </div>
            </li>
            <li className={classes.Item}>
              <button>blog</button>
            </li>
            <li className={classes.Item}>
              <button>pages</button>
              <div className={classes.SubCategory}>
                <SubCategory category={pages} title="Homepages" />
                <SubCategory category={header} title="Niche Layouts" />
                <SubCategory category={shop} title="Niche Layouts" />
               </div>
            </li>
            <li className={classes.Item}>
              <button>
                <HiOutlineShoppingBag /> buy
              </button>
            </li>
          </ul>
          <div className={classes.Contact}>
            <a href="tel:+013456798">
              <BsTelephone />
              +01 345 678
            </a>
            <a href="mailto:abc@example.com">
              <AiOutlineMail />
              Elessi@domain.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
