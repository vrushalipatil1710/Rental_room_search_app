import React from "react";
import { Link } from 'react-router-dom';

function Rajarampuri(){
    return (
        <>
        <div className="city_name">
            
            <div className="map">
                <p>Name:<br/>Aprin Apartment<br/>
                Address:<br/>M6VV+9Q9, 9th Ln, Poorvarang, Mahalaxminagar, Rajarampuri, Kolhapur, Maharashtra 416001
                </p>
                <Link to="https://goo.gl/maps/a6E2Z4v3G7VzKJeQA" className='log'>
                    Go to map
                </Link>
            </div><hr />
            <div className="map">
                <p>Name:<br/>
                Krushnai Apartment<br/>
                Address:2019, 7th Ln, Poorvarang, Mahalaxminagar, Rajarampuri, Kolhapur, Maharashtra 416008<br/>
                </p>
                <Link to="https://goo.gl/maps/ncQWTc31X3JUyahu5" className='log'>
                    Go to map
                </Link>
            </div><hr />
            <div className="map">
                <p>Name:<br/>
                Mandalik Apartment (Private Rooms For Boy's Only)<br/>
                Address:<br/>
                Sanmitra Housing Society, Rajarampuri, Kolhapur, Maharashtra 416008</p>
                <Link to="https://goo.gl/maps/SY7S1HZ8msi5rMHbA" className='log'>
                    Go to map
                </Link>
            </div><hr />
            <div className="map">
                <p>Name:<br/>
                Atharva Apartment
                    <br/>
                Address:<br/>M6RW+GQG, S.T.Colony, Mahalaxminagar, Rajarampuri, Kolhapur, Maharashtra 416001</p>
                <Link to="https://goo.gl/maps/7PQZct1fBPSoeEC27" className='log'>
                    Go to map
                </Link>
            </div><hr />
            <div className="map">
                <p>Name:<br/>
                Siddhesh Apartment
                    <br/>M7R3+G4Q, 13th Ln, Sanmitra Housing Society, Rajarampuri, Kolhapur, Maharashtra 416008</p>
                <Link to="https://goo.gl/maps/GxxyHUDKKq5c6DeH6" className='log'>
                    Go to map
                </Link>
            </div><hr />
            </div>
            </>

    )
}

export default Rajarampuri;