import React from "react";
import { Link } from "react-router-dom";
import classes from "./HeaderCenter.module.scss";
import logo from "../../../assets/images/logo.webp";
import like from '../../../assets/icons/like.svg'
import shopbag from '../../../assets/icons/shopbag.svg'
import user from '../../../assets/icons/user.svg'

function HeaderCenter() {
  return (
    <div className={classes.HeaderCenter}>
      <div className="container">
        <div>
          <a href="/">
            <img src={logo} alt="logo site" />
          </a>
          <form>
            <input type="text" placeholder="I'm shopping for..." />
            <button type="submit">search</button>
          </form>
          <ul>
            <li>
              <button>
                <img src={user} alt="" />
              </button>
            </li>
            <li>
              <button>
                <img src={like} alt="" />
                <span>0</span>
              </button>
            </li>
            <li>
              <button>
                <img src={shopbag} alt="" />
                <span>0</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderCenter;
