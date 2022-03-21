import React, { useState } from "react";
import classes from "./HeaderTop.module.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function HeaderTop() {
  const [lang, setLang] = useState("English");
  const [ishShow, setIsShow] = useState(false);

  const transtion = {
    transform: "translateY(13px)",
    transition: "all 0.8s ease",
  };

  return (
    <div className={classes.HeaderTop}>
      <div className="container">
        <div>
          <p>Add anything here or just remove it...</p>
          <button
            onMouseEnter={() => setIsShow(true && transtion)}
            onMouseLeave={() => setIsShow(false)}
            className={classes.Lang}
          >
            {lang}
            <MdOutlineKeyboardArrowDown />
          </button>
          {ishShow && (
            <ul
              style={transtion}
              onMouseLeave={() => setIsShow(false)}
              onMouseEnter={() => setIsShow(true)}
            >
              <li>
                <button onClick={() => setLang("Uzbek")} value="Uzbek">
                  Uzbek
                </button>
              </li>
              <li>
                <button onClick={() => setLang("English")} value="English">
                  English
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
