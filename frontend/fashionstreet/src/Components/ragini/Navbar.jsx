import React from 'react'
import "./Navbar.css"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
const Navbar = () => {
    return (
        <div className='header'>
            <img className='header__logo' src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg" alt="" />

            <div className="header__nav1">
                <div className='header__option'>WOMEN</div>
                <div className='header__option'>MEN</div>
                <div className='header__option'>BEAUTY</div>
                <div className='header__option'>KIDS</div>
                <div className='header__option'>HOME</div>
                <div className='header__option'>DESIGNERS</div>
                <div className='header__option'>COMMUNITY</div>
                <div className='header__option'>SALE</div>


            </div>
            <div className='header__nav2'>
                <div className='header__option'>flag</div>
                <div className='header__option'>
                    <NotificationsNoneIcon />
                </div>
                <div className='header__option'>
                    <FavoriteBorderIcon />
                </div>
                <div className='header__option'>
                    <WorkOutlineIcon />
                </div>
                <div className='header__option'>login</div>
                <div className='header__option'> <SearchIcon /></div>

            </div>

        </div>
    )
}

export default Navbar
