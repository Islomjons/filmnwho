import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'
import homeLogo from "../../assets/images/home.svg"
import dashboardLogo from "../../assets/images/dashboard.svg"
import profileLogo from "../../assets/images/profile.svg"
import orderIcon from "../../assets/images/order.svg"
import messegeIcon from "../../assets/images/messege.svg"
import saveIcon from "../../assets/images/save.svg"
import Search from '../search/Search'
import Storyliner from '../storyliner/Storyliner'

const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
            <div className="hero__container">
                <ul className="hero__list">
                    <li className="hero__item active__hero__item">
                        <Link>
                            <img className="header__img" src={homeLogo} alt="" />
                        </Link>
                    </li>
                    <li className="hero__item">
                        <Link>
                            <img className="header__img" src={dashboardLogo} alt="" />
                        </Link>
                    </li>
                    <li className="hero__item">
                        <Link>
                            <img className="header__img" src={profileLogo} alt="" />
                        </Link>
                    </li>
                    <li className="hero__item">
                        <Link>
                            <img className="header__img" src={orderIcon} alt="" />
                        </Link>
                    </li>
                    <li className="hero__item">
                        <Link>
                            <img className="header__img" src={messegeIcon} alt="" />
                        </Link>
                    </li>
                    <li className="hero__item">
                        <Link>
                            <img className="header__img" src={saveIcon} alt="" />
                        </Link>
                    </li>
                </ul>

                <Search />
                <Storyliner />
            </div>  
        </div>
    </div>
  )
}

export default Hero