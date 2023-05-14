import React from 'react'
import { Link } from 'react-router-dom'
import "./Storyliner.css"
import hamburgerIcon from "../../assets/images/hamburger.svg";
import dotsIcon from "../../assets/images/dots.svg"
import { v4 as uuidv4 } from 'uuid';
import StorylinerCards from '../storylinerCards/StorylinerCards';

const Storyliner = () => {
    const selectSort = [
        "Sort By",
        // "Sort By Name",
        // "Sort By Age",
    ]
  return (
    <div className="storyliner">
        <div className="storyliner__container">
            <div className="storyliner__wrapper">
                <p className="storyliner__text">Storyliner</p>
                <p className="storyliner__number">2934 results</p>
            </div>
            
            <div className="storyliner__info__wrapper">
                <ul className="storyliner__list">
                    <li className="storyliner__item">
                        <Link className="storyliner__link">Location</Link>
                    </li>
                    <li className="storyliner__item">
                        <Link className="storyliner__link">Price</Link>
                    </li>
                    <li className="storyliner__item">
                        <Link className="storyliner__link">Language</Link>
                    </li>
                    <li className="storyliner__item">
                        <Link className="storyliner__link">Likes</Link>
                    </li>
                </ul>

                <div className="storyliner__right__side">
                    <img className="storyliner__hamburger" src={hamburgerIcon} alt="" />
                    <img className="storyliner__dots" src={dotsIcon} alt="" />
                    <select className="storyliner__select">
                        {
                            selectSort.map(sortby => 
                                <option value="" key={uuidv4()}>{sortby}</option>    
                            )
                        }
                    </select>
                </div>
            </div>
        <StorylinerCards />
        </div>
    </div>
  )
}

export default Storyliner