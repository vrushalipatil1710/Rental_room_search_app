import React from "react";
import { Link } from 'react-router-dom';

function Tarabaipark(){
    return (
        <>
        <div className="city_name">
        <div className="map">
                <p>Name:<br/>Anurag Apartment<br/>
                Address:<br/>
                P66W+HCM, Tarabai Park, Kolhapur, Maharashtra 416005</p>
                <Link to="https://goo.gl/maps/Xgi6Dh1MvE1yVyAU6" className='log'>
                    Go to map
                </Link>
            </div><hr />
            <div className="map">
                <p>Name:<br/>Shivaji aprtment<br/>
                Address:<br/>
                204/15/1, New Shahupuri Kolhapur, Tarabai Park, Kolhapur, Maharashtra 416003</p>
                <Link to="https://goo.gl/maps/yPYx4Q5MNLnevSyc7" className='log'>
                    Go to map
                </Link>
            </div><hr />
            <div className="map">
                <p>Name:<br/>Om Shanti Boys Hostel</p>
                <Link to="https://goo.gl/maps/ewPivagfWeKoT6Bt8" className='log'>
                    Go to map
                </Link>
            </div><hr />
            <div className="map">
                <p>Name:<br/>Atharva Pride Apartments<br/>
                Address:<br/>P67W+RXV, Behind Dhairyaprasad Hall, Tarabai Park, Kolhapur, Maharashtra 416005
                </p>
                <Link to="https://goo.gl/maps/YcdAZwUVif8RdoRd7" className='log'>
                    Go to map
                </Link>
            </div><hr />
            <div className="map">
                <p>Name:<br/>Vardhvinayak apartment<br/>
                Address:<br/>Tarabai Park, Kolhapur, Maharashtra 416005
                </p>
                <Link to="https://goo.gl/maps/JwagtkFNCjtdQDZk9" className='log'>
                    Go to map
                </Link>
            </div><hr />
            <div className="map">
                <p>Name:<br/>Serenity Apartment<br/>
                Address:<br/>
                240/B, General Thorat Marg, E Ward, Tarabai Park, Kolhapur, Maharashtra 416003</p>
                <Link to="https://goo.gl/maps/s2DCYwwDWugEtWZA9" className='log'>
                    Go to map
                </Link>
            </div><hr />
           
            

        </div>
</>
    )
}
export default Tarabaipark;