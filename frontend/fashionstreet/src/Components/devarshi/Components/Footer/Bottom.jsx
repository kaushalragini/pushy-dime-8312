import React from "react";
import style from "./bottom.module.css";

const Bottom = () => {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.flex}>
          <div className={style.left}>
            <h1>Download the ModeSens App</h1>
            <br />{" "}
            <p>A seamless experience that takes your style to the next level</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.modesens.androidapp&hl=en_IN&gl=US"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <br />
              <br />
              <button className={style.btn}>DOWNLOAD NOW</button>
            </a>
            <br />
            <br />
            <div className={style.ImgDiv1}>
              <img
                src="https://cdn.modesens.com/static/img/20220420AppDownloaden.png"
                alt="j"
                className={style.image_mobile}
              />
            </div>
          </div>
          <div className={style.right}>
            <h1>Install the ModeSens Browser Extension</h1>
            <br />
            <p>
              Get timely, accurate product information every time you browse
            </p>
            <a
              href="https://addons.mozilla.org/en-GB/firefox/addon/modesens-shopping-assistant/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <br />
              <br />
              <button className={style.btn}>INSTALL NOW</button>
            </a>
            <br />
            <br />
            <div className={style.ImgDiv2}>
              <img
                src="https://cdn.modesens.com/static/img/20211109downloadright.png"
                alt="f"
                className={style.image_mobile}
              />
            </div>
          </div>
        </div>
      </div>
      <p className={style.botton_p}>
        When you follow our links to visit a brand or retailer’s website or make
        a purchase, ModeSens may earn a commission.
      </p>
    </div>
  );
};

export default Bottom;
