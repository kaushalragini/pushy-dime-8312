import { React, useState } from "react";
import style from "./footer.module.css";

import { BsApple } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import { MdExtension } from "react-icons/md";
export const Footer = () => {
  const [formData, setformData] = useState({
    email: "",
    gender: "",
  });

  const handleChange = (e) => {
    setformData({
      ...formData({ ...formData, [e.target.id]: e.target.value }),
    });
    console.log("Hello");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className={style.main_footer}>
      <hr />
      <br />
      <div className={style.mainbox}>
        <div className={style.customercare}>
          <h3>CUSTOMER CARE</h3>
          <a href="https://modesens.com/protection/">Shopper Protection</a>
          <br />
          <a href="https://modesens.com/loyalty/">Loyalty Program</a>
          <br />
          <a href="https://modesens.com/faq/">Help Center</a>
          <br />
          <a href="https://modesens.com/size-guide/">Size Guides</a>
          <br />
          <a href="https://modesens.com/size-guide/">
            {" "}
            Contact Us / Feedback
          </a>{" "}
          <br />
          <a href="https://modesens.com/faq/#shipping-return">
            Shipping / Returns
          </a>
        </div>
        <div className={style.Information}>
          <h3>INFORMATION</h3>
          <a href="https://modesens.com/about/">About Us</a>
          <br />
          <a href="https://modesens.com/influencer/">Influencer Program</a>
          <br />
          <a href="https://modesens.com/stores/">Partner Stores</a>
          <br />
          <a href="https://modesens.com/fashion-sitemap/">Sitemap</a>
          <br />
        </div>
        <div className={style.Legal}>
          <h3>LEGAL</h3>
          <a href="https://modesens.com/legal/">Terms Of Use</a>
          <br />
          <a href="https://modesens.com/disclosure/">Disclosure</a>
          <br />
          <a href="https://modesens.com/privacy/">Privacy Policy</a>
          <br />
          <a href="https://modesens.com/community-guidelines/">
            Community Guidelines
          </a>
          <br />
        </div>
        <div className={style.connect}>
          <h3>CONNECT WITH US</h3>
          <div>
            <a href="https://play.google.com/store/apps/details?id=com.modesens.androidapp&hl=en_IN&gl=US">
              {" "}
            </a>
            <br />
          </div>
          <div>
            <BsApple fontSize={"30px"} />
            <DiAndroid fontSize={"30px"} />
            <MdExtension fontSize={"30px"} />
            <a
              href="https://microsoftedge.microsoft.com/addons/detail/modesens-shopping-assista/bpmcdjmehcbmbedbhmmipkcccmhigamj"
              style={{ marginTop: "10px" }}
            ></a>
            <br />
          </div>
        </div>
        <div className={style.News}>
          <h3>NEWSLETTER SIGN UP</h3>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              className={style.email}
              type="text"
              name="email"
              placeholder="Email Address"
              id="email"
            />
            <div className={style.men_women}>
              <input
                onChange={(e) => {
                  const setGender = e.target.value;
                  setformData({ ...formData, gender: setGender });
                }}
                type="radio"
                name="Women's"
                className={style.Women}
                value={"Women's"}
              />{" "}
              &nbsp; Women's &nbsp;
              <input
                onChange={(e) => {
                  const setGender = e.target.value;
                  setformData({ ...formData, gender: setGender });
                }}
                type="radio"
                name="Men's"
                className={style.Men}
                value={"Men's"}
              />{" "}
              &nbsp; Men's &nbsp;
            </div>
            <input className={style.inputSubmit} type="submit" value="submit" />
          </form>
        </div>
      </div>
      <br />
      <br />
      <hr className={style.hrTag} />
      <div className={style.contacticons}>
        <div className={style.leftside}>
          <img
            src="https://cdn.modesens.com/static/img/20180905footer_logo.svg"
            alt="f"
          />
          <p>© 2022, ModeSens Inc</p>
        </div>

        <div className={style.rightside}>
          <img
            src="https://cdn.modesens.com/static/img/20181008footer-pit.svg"
            alt="y"
            className={style.print}
          />

          <img
            src="https://cdn.modesens.com/static/img/20181008footer-tt.svg"
            alt="u"
            className={style.print}
          />

          <img
            src="https://cdn.modesens.com/static/img/footer-p.svg"
            alt="u"
            className={style.print1}
          />

          <img
            src="https://cdn.modesens.com/static/img/footer-fb.svg"
            alt="k"
            className={style.print1}
          />
          {/* <img
            src="https://cdn.modesens.com/static/img/footer-wb.svg"
            alt="l"
            className={style.print1}
          />
          <img
            src="https://cdn.modesens.com/static/img/footer-wx.svg"
            alt="j"
            className={style.print1}
          /> */}
        </div>
      </div>
    </div>
  );
};
