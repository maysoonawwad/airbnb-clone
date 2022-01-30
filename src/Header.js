import React from 'react'
import "./header.css";
import SearchIcon from '@material-ui/icons/Search';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { Avatar } from '@material-ui/core';
import {Link} from "react-router-dom";
function Header() {
    return (
        <div className="header">
        <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"/>
    
          <div className="header_center">
              <input type="text" />
                <SearchIcon />
              </div>
              <div className="header_right">
                  <p>Become a host</p>
                  <LanguageOutlinedIcon />
                 <ExpandMoreOutlinedIcon />
                 <Avatar />
              </div>
              
        </div>
    )
}

export default Header
//https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png