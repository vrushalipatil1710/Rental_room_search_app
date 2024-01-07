import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './assets/all.css'

function Signup() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/register', { name, email, password })
      .then(result => {console.log(result)
        navigate('/login')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="registerpage">
      <div className="bg-white p-3">
        <h2>register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Name">
              <strong>Name</strong>
            </label>
            <input type="text"
              placeholder="Enter name"
              autoComplete="off"
              name="name"
              className="inputdetails"
              onChange={(e) => setName(e.target.value)}>
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="email">
            <strong>Email</strong>
            </label>
            <input type="email"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              className="inputdetails"
              onChange={(e) => setEmail(e.target.value)}>
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="password">
            <strong>Password</strong>
            </label>
            <input type="password"
              placeholder="Enter password"
              autoComplete="off"
              name="password"
              className="inputdetails"
              onChange={(e) => setPassword(e.target.value)}>
            </input>
          </div>
          <button type="submit" className="btn">
            Signup
          </button>
        </form><br/>
        <p>Already registered?</p>
        <Link to="/login">
          Login
        </Link>
      </div>
    </div>

  );
}
export default Signup;