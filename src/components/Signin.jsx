import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/signin.css'
const Signin = () => {
    
    
  return (
    <div className='signin-container'>
      <div className="signin-row">
        <div className="signin-col">
            <div className='form' >
               <h2>Sign In</h2>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="password" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required/>
                </div>
                <div className="form-group">
                    <button  type='submit'><Link to='/'>Sign In</Link></button>
                </div>
                <div className="from-group">
                    <Link to='/signup'>Create your account</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signin