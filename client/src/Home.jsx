import React from "react";
import './assets/all.css'

function Home() {
    function js() {
        var searchbtn = document.getElementById('searchbar').value;

        if (searchbtn == 'kolhapur') {
            window.open("http://localhost:5173/kolhapur")
        }
        if (searchbtn == 'rajarampuri') {
            window.open(" http://localhost:5173/rajarampuri")
        }
        if (searchbtn == 'bawada') {
            window.open(" http://localhost:5173/bawada")
        }
        if (searchbtn == 'tarabai park') {
            window.open("http://localhost:5173/tarabaipark")
        }
        else {
            alert("Please enter valid landmark")
        };
    }
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
                                <a class="nav-link" href="http://localhost:5173/login">LOGOUT</a>
                            </li>
                            </ul>
                        <form class="d-flex" role="search">
                            <input class="searchbar" type="search" placeholder="Search"  id="searchbar"name="searchbar" aria-label="Search"></input>
                            <button class="btn" type="submit" id="searchbtn" name="searchbtn" onClick={js}>SEARCH</button>
                        </form>
                        </div>
                    </div>
            </nav>
        </>
    )
}
export default Home;