import React from "react";
import img1 from './images/Q.png'
import img2 from './images/home.png'
import img3 from './images/broker.jpg'
import img4 from './images/phone.jpg'
import img5 from './images/map.png'
import './assets/all.css'

function Quickfind() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">QUICK FIND</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="http://localhost:5173/quickfind">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="http://localhost:5173/login">LOGIN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="http://localhost:5173/signup">SIGNUP</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="http://localhost:5173/ownerlogin">OWNERLOGIN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">CONTACT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">ABOUT US</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="card">
                <img src={img1}></img>
            </div><br />
            <h2>WHY WE USE QUICKFIND?</h2>
            <div class="card-group">
                <div class="card">
                    <img src={img2}></img>
                    <div class="card-body">
                        <h5 class="card-title">EASY FOR EVERYONE</h5>
                        <p class="card-text">No need to visit any location physically beacause it is fully online service.</p>
                        
                    </div>
                </div>
                <div class="card">
                    <img src={img3}></img>
                    <div class="card-body">
                        <h5 class="card-title">NO BROKARAGE</h5>
                        <p class="card-text">No any broker is involved in process. It can save brokarage cost.</p>
                       
                    </div>
                </div>
                <div class="card">
                    <img src={img4}></img>
                    <div class="card-body">
                        <h5 class="card-title">FIND LOCATION EASILY</h5>
                        <p class="card-text">You can easily find and shortlist any property as per requirements.</p>
                    </div>
                </div>
            </div><br />
            <div class="card">
                <img src={img5}></img>
            </div><br />
            <div id="contact">
                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                <p><i className="fas fa-home me-3 text-secondary"></i> Kolhapur,maharashtra</p>
                <p>
                    quickfind@gmail.com
                </p>
                <a href=" + 91 8767700775">Phone:8767700775</a>
                <div id="copyright">
                    © 2023 Copyright:
                    <a className="text-reset fw-bold">QuickFind</a>
                </div>
            </div>
        </>
    )
}
export default Quickfind 