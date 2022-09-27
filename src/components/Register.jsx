import React, { useState } from 'react'
import '../styles/register.css'
import { Link } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmPassword] = useState('');
    
  return (
    <>
    
        <div className="signup-container">
            <div className="signup-row">
                <div className="signup-col">
                    <div className="signup-title">Sign Up</div>
                </div>
            </div>
            <div className="signup-row">
                <div className="signup-col">
                <form  >
                <div className="form-group">
                    <label htmlFor="name"> Name</label>
                    <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="c_password">Confirm Password</label>
                    <input type="password" id="c_password" required value={confirmpassword} onChange={(e) => setconfirmPassword(e.target.value)}/>
                </div>
                
                <div className="form-group">
                    <button  type='submit'>Sign Up</button>
                </div>
                <div className="form-group">
                    <Link  to='/Login'>Already have an account</Link>
                </div>
            </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register