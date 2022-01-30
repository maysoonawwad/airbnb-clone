import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import "./banner.css";
import Search from './Search';
function Banner() {
    const history = useHistory();
    const [showSearch , setShowSearch] = useState (false);

    return (
        <div className="banner">
          <div className= "banner_search">
                 
               <Button onClick={()=> setShowSearch(!showSearch)} className="banner_button" variant="outlined" >{ showSearch? "hide" : "Search Dates"}</Button>
               {showSearch && <Search />}
            </div>
            <div className="banner_info">
                <h1>Get out and stretch your imagination</h1>
                <h5>plan a different kind of getway to uncover the hidden gems near you</h5>
                <Button onClick={() => history.push('/search')} className="button" variant="outlined" >Explor Nearby</Button>
            </div>
          
        </div>
    )
}

export default Banner
