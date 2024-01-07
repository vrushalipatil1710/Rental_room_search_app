import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Ownerlogin() {
    const [name, setName] = useState()
    const [propname, setPropname] = useState()
    const [rent, setRent] = useState()
    const [number, setNumber] = useState()
    const [address, setAddress] = useState()
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:3001/data', { name, address,number,propname,rent })
            .then(result => {
                console.log(result);
                navigate('/ownerlogin');
            })
            .catch(err => console.log(err));
    }
    return (
        <div className="loginpage">
        <div className="reg-body">
            
            <form className='box'onSubmit={handleSubmit}>
            <h2>Property Details</h2>
            <div className="mb-3">
                    <label  htmlFor="Owners Name">
                         <strong> Full Name </strong>
                         </label>
                    <input 
                     type="text"  
                     placeholder=" Enter Full Name"
                     autoComplete="off"
                     name="name"
                     className="reg_1"
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label  htmlFor="Property Name">
                         <strong>Property Name </strong>
                         </label>
                    <input 
                     type="text"  
                     placeholder=" Enter Proprty Name"
                     autoComplete="off"
                     name="propname"
                     className="reg_1"
                        onChange={(e) => setPropname(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label  htmlFor="address">
                         <strong>Address</strong>
                         </label>
                    <input 
                     type="text"  
                     placeholder=" Enter address"
                     autoComplete="off"
                     name="address"
                     className="reg_1"
                        onChange={(e) => setAddress(e.target.value)}
                         />
                </div>
                <div className="mb-3">
                    <label  htmlFor="rent">
                         <strong>Rent</strong>
                         </label>
                    <input 
                     type="number"  
                     placeholder=" Enter rent per person"
                     autoComplete="off"
                     name="rent"
                     className="reg_1"
                        onChange={(e) => setRent(e.target.value)}
                         />
                </div>
                <div className="mb-3">
                    <label  htmlFor="rent">
                         <strong>Mobile number</strong>
                         </label>
                    <input 
                     type="telephone"  
                     placeholder=" Enter contact no"
                     autoComplete="off"
                     name="number"
                     className="reg_1"
                        onChange={(e) => setNumber(e.target.value)}
                         />
                </div>
    
    <button  type="submit" className="btn ">Submit</button><br/>
    
        </form>
          </div>
          </div>
    );
}
       

export default Ownerlogin 