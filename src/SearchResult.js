import React from 'react'
import "./searchresult.css"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import StarIcon from "@material-ui/icons/Star"
function SearchResult({
    img ,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div className="searchresult">
            <img src={img} />
            <FavoriteBorderIcon className="searchresult_heart" />
            <div className="searchresult_info">
                 <div className="infotop">
                   <p> {location}</p>
                   <h3>{title} </h3>
                   <p>_____</p>
                   <p>{description}</p>
                 </div>
            <div className="infobottom">
               <div className="infostar">
                   <StarIcon
                    className="staricon"
                    />
                    <p>
                        <strong>
                            {star}
                        </strong>
                    </p>
           
               </div>
               <div className="price">
                 <h2>{price} </h2>
                 <p>{total} </p>
               </div>
            </div>
            </div>

        </div>
    )
}

export default SearchResult
