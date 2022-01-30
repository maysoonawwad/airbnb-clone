import React from 'react'
import Banner from './Banner'
import "./Home.css"
import Card from "./Card"
function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home-section">
                <Card src="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=480"
                  title ="Entire homes"
                  description="Comfortable private places , with room for friends or family"
                 />
                <Card 
                src="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                  title ="Unique stays"
                  description="Spaces that are more than just a place to sleep"
                 />
                <Card 
                    src="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=480"
                  title ="Online Experiences"
                  description="Live, interactive activities led by Hosts."
                

                />
            </div>
            <div className="home-section">
                <Card
                 src="https://a0.muscache.com/im/pictures/bd730c41-f287-4571-8d18-e9daa4e1dba5.jpg?im_w=1200"
                 title="3 Bedroom Flat in Bournemouth"
                 description="Sunny Bournemouth"
                 price="$350/night"
                 
                 />
                <Card 
                    src="https://a0.muscache.com/im/pictures/12431995-0917-4f31-8e71-34bf3c7c4334.jpg?im_w=1200"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with this stunning penthoes"
                    price="$130/night"

                />
                <Card 
                src="https://a0.muscache.com/im/pictures/108924887/eee825de_original.jpg?im_w=1200"
                title="1 Bedroom apartment"
                description="Superhost with great amenities "
                price="$70/night"
                 />
            </div>
        </div>
    )
}

export default Home
