import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './assets/all.css'


function Login(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3000/login', { email, password })
        .then(result => {console.log(result)
            if(result.data === "success"){
            navigate('/home')
            }
        })
        .catch(err => console.log(err))
    }
    return(
    <div className="registerpage">
      <div className="bg-white p-3">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <strong>Email</strong><br/>
            <input type="email"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              className="inputdetails"
              onChange={(e) => setEmail(e.target.value)}>
            </input>
          </div>
          <div className="mb-3">
            <strong>Password</strong><br/>
            <input type="password"
              placeholder="Enter password"
              autoComplete="off"
              name="password"
              className="inputdetails"
              onChange={(e) => setPassword(e.target.value)}>
            </input>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form><br/>
        <p>Dont have an account?please signup</p>
        <Link to="/signup">
          Signup
        </Link>
      </div>
    </div>
    )
}
export default Login;