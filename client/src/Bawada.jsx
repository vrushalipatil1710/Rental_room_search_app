import React from "react";
import { Link } from 'react-router-dom';

function Bawada(){
    return (
        <>
        <div className="map_name">
           <div className="map">
                <p>Name:<br/>Govind Mess and Hostel</p>
                <Link to="https://goo.gl/maps/RWmhmjX9F26gUi188" className='log'>
                    Go to map
                </Link>
            </div><hr />
            <div className="map">
                <p>Name:<br/>Dr Ambedkar Youth Hostel</p>
                <Link to="" className='log'>
                    Go to map
                </Link>
            </div><hr />
            <div className="map">
                <p>Name:<br/>Punya pravah society</p>
                <Link to="https://goo.gl/maps/zjYDVAp22bS9AiSm7" className='log'>
                    Go to map
                </Link>
            </div><hr />
            <div className="map">
                <p>Name:<br/>Vasant Vaibhav Apartment</p>
                <Link to="https://goo.gl/maps/3BVjiah9m2x9S6RRA" className='log'>
                    Go to map
                </Link>
            </div><hr />
        </div>
</>
    )
}
export default Bawada;