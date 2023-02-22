import React, { useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci"
import { GiUsaFlag } from "react-icons/gi"
import { NavLink } from "react-router-dom";
import { RiNotification2Line } from "react-icons/ri"
import { BsHeart } from "react-icons/bs"
import { BsHandbag } from "react-icons/bs"
// import  womenHoevr from "../ragini/womenHoevr"
const Header = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                {/* 1st logo part  */}
                <div className="logo">
                    <img className="logoImg" src="download.png" alt="" />
                </div>
                {/* 2nd menu part  */}
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul>
                        <li>
                            <NavLink to="/" >WOMEN</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">MEN</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">BEAUTY</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">KIDS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">DESIGNERS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service">COMMUNITY</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">SALE</NavLink>
                        </li>
                    </ul>
                </div>
                {/* 3rd social media links */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a
                                href="#h"
                            >
                                <GiUsaFlag className="facebook" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#d"
                            >
                                <RiNotification2Line className="facebook" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#d"
                            >
                                <BsHeart className="facebook" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#e"
                            >
                                <BsHandbag className="instagram" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="h#"
                            >
                                <CiSearch className="youtube" />
                            </a>
                        </li>
                    </ul>
                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                        <a href="#hh" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>

            {/* hero section  */}
        </>
    );
};

export default Header;