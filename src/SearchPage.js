import { Button } from '@material-ui/core'
import React from 'react'
import "./searchpage.css"
import SearchResult from './SearchResult'
function SearchPage() {
    return (
        <div className="searchpage">
   <div className="searchpage_info">
      <p>62 stays . 26 august to 30 august . 2 guest</p>
      <h1> Stays nearby </h1>
      <Button variant="outlined">
        Cancellation Flexibility
      </Button>
      <Button variant="outlined">
      Type of place
      </Button>
      <Button variant="outlined">
      Price
      </Button>
      <Button variant="outlined">
      Rooms and beds
      </Button>
      <Button variant="outlined">
      More filters
      </Button>
   </div>
   <SearchResult 
        img ="https://a0.muscache.com/im/pictures/miso/Hosting-48223229/original/4fefb889-4c83-49b4-a862-738c11727184.jpeg?im_w=480"
    location="Hotel room in Aqaba"
    title="Room in Cloud7 Residences Ayla Aqaba"
    description="1 guest · 1 bedroom · 1 bed · 1 private bathroom"
    star={4.73}
    price="50 JOD/ night"
    total="100 JOD total"
   />
   <SearchResult 
        img ="https://a0.muscache.com/im/pictures/miso/Hosting-48223229/original/4fefb889-4c83-49b4-a862-738c11727184.jpeg?im_w=480"
    location="Hotel room in Aqaba"
    title="Room in Cloud7 Residences Ayla Aqaba"
    description="1 guest · 1 bedroom · 1 bed · 1 private bathroom"
    star={4.73}
    price="50 JOD/ night"
    total="100 JOD total"
   />
        </div>
    )
}

export default SearchPage
