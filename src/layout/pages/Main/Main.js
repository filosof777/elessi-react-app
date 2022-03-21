import React from "react";
import classes from "./Main.module.scss";
import heroBg from "../../../assets/images/heroBg/img-1.webp";
import Hero from "./Hero/Hero";
import Service from "./Service/Service";
import TopCategories from "./TopCategories/TopCategories";
import InfoProduct from "./InfoProduct/InfoProduct";

function Main() {
  return (
    <main className={classes.Main}>
      <div
        className={classes.Hero}
      >
        <div className="container">
          <Hero />
        </div>
      </div>
      <div className="container">
        <Service />
      </div>
        <TopCategories />
        <InfoProduct />
    </main>
  );
}

export default Main;
