import React from 'react'
import "./Search.css"
import preImg from "../../assets/images/pre.svg";
import searchApi from "../../api/dummiy-data.search.json"
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Search = () => {
  return (
    <div className="search">
        <div className="container">
            <div className="search__container">
                <div className="search__input__wrapper">
                     <input className="search__input" type="text" placeholder="Search"/>
                </div>
                <div className="search__production__wrapper">
                    <img className="search__preduction__img" src={preImg} alt="" />
                    <p className="search__preduction__title">Pre-production</p>
                </div>

                <ul className="search__list">
                    {
                        searchApi.map(searchs => 
                          <li className="search__item" key={uuidv4()}>
                              <Link style={{textDecoration: "none"}}>
                                  <p className="search__link__text">{searchs.searchLinks}</p>
                              </Link>
                          </li>  
                        )
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Search