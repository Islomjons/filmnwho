import React from 'react'
import "./Header.css"
import filmWhoLogo from "../../assets/images/projectlogo.svg"
import youtubeLogo from "../../assets/images/youtube.svg"
import preImg from "../../assets/images/pre.svg"
import postImg from "../../assets/images/post.svg"
import ball from "../../assets/images/ball.svg"
import head from "../../assets/images/face.svg"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
        <div className="container">
            <div className="header__container">
                <Link to="/">
                    <img className="header__logo__img" src={filmWhoLogo} alt="" />
                </Link>
                
                <div className="header__list">
                    <div className="header__item active__header__item">
                        <Link className="header__item__link">
                          <img className="header__item__img" src={preImg} alt="" />
                          <p className="header__item__text">Pre-production</p>
                        </Link>
                    </div>
                    <div className="header__item">
                        <Link className="header__item__link" to="/production">
                          <img className="header__item__img" src={youtubeLogo} alt="" />
                          <p className="header__item__text active__header__text">Production</p>
                        </Link>
                    </div>
                    <div className="header__item">
                        <Link className="header__item__link">
                          <img className="header__item__img" src={postImg} alt="" />
                          <p className="header__item__text active__header__text">Post-production</p>
                        </Link>
                    </div>
                </div>

                <div className="header__left">
                    <Link className="header__left__link">
                      <img className="header__left__img" src={ball} alt="" />
                      <img className="header__left__img1" src={head} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header