import React from "react";
import classes from "./Hero.module.scss";

function Hero() {
  return (
    <div className={classes.Hero}>
      <div>
        <h5>elessi store</h5>
        <h2>fresh hand-picked vegatables every day!</h2>
        <button>shop now</button>
      </div>
    </div>
  );
}

export default Hero;
