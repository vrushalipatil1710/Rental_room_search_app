import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Quickfind from './Quickfind'
import Kolhapur from './Kolhapur'
import Rajarampuri from './Rajarampuri'
import Tarabaipark from './Tarabaipark'
import Bawada from './Bawada'
import Ownerlogin from './Ownerlogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/quickfind'element={<Quickfind/>}></Route>
      <Route path='/kolhapur' element={<Kolhapur />}></Route>
        <Route path='/rajarampuri' element={<Rajarampuri />}></Route>
        <Route path='/tarabaipark' element={<Tarabaipark />}></Route>
        <Route path='/bawada' element={<Bawada />}></Route>
        <Route path='/ownerlogin' element={<Ownerlogin />}></Route> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
