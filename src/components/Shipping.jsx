import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import '../styles/shipping.css'

const Shipping = () => {
    const [FullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
    }
  return (
    <>
       <Navbar/>
        <div className="shipping-container">
            <div className="shipping-row">
                <div className="shipping-col">
                    <div className="shipping-title">Shipping Address</div>
                </div>
            </div>
            <div className="shipping-row">
                <div className="shipping-col">
                <form onSubmit={submitHandler} >
            
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" required value={FullName} onChange={(e) => setFullName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" required value={address} onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" required value={city} onChange={(e) => setCity(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="p_code">Postal Code</label>
                    <input type="text" id="p_code" required value={postalCode} onChange={(e) => setPostalCode(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" required value={country} onChange={(e) => setCountry(e.target.value)}/>
                </div>
                <div className="form-group">
                    <button  type='submit'>continue</button>
                </div>
            </form>
                </div>
            </div>
        </div>
       <Footer/>
    </>
  )
}

export default Shipping