import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className='header'>
            <img className='header__logo' src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg" alt="" />

            <div className="header__nav">
                <div className='header__option'>WOMEN</div>
                <div className='header__option'>MEN</div>
                <div className='header__option'>BEAUTY</div>
                <div className='header__option'>KIDS</div>
                <div className='header__option'>HOME</div>
                <div className='header__option'>DESIGNERS</div>
                <div className='header__option'>COMMUNITY</div>
                <div className='header__option'>SALE</div>


            </div>
        </div>
    )
}

export default Navbar
