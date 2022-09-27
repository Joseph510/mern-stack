import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faHeart, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons'
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {

    
    return(
        <div classname='n-container'>
            <div classname='n-row'>
           <div className='n-col'>
            <span className='n-mail'>youssefnaffeti14@gmail.com</span>
            <a href='/account'><span><FontAwesomeIcon icon={faUser}/></span></a>
        </div>
        <div className='n-col'>
           <div className="socials">
            <a href='/'><img src="/images/socials/facebook.png" alt=''/></a>
            <a href='/'><img src='/images/socials/instagram.png' alt=''/></a>
            <a href='/'><img src='/images/socials/twitter.png' alt=''/></a>
            <a href='/'><img src='/images/socials/youtube.png' alt=''/></a>   
           </div>
        </div>
        </div>
        <div className="n-row">
            <div className="n-col">
                <a href="/"><img src="/images/logo/logo.png" className="logo" alt=""></img></a>
            </div>
            <div className="n-col">
                <div className="icons">
                    <a href='/Login'><span><FontAwesomeIcon icon={faArrowRightToBracket}/> Login </span></a>
                    <a href='/Wish'><span><FontAwesomeIcon icon={faHeart}/><span className="totalItems">8</span> </span></a>
                    <a href='/Cart'><span><FontAwesomeIcon icon={faShoppingBag}/> <span className='totalItems'>8</span></span></a> 
                </div>
            </div>
        </div>
        <div className="n-row">
            <nav className="nav">
                <ul className="items">
                  <li className="list"><NavLink to="/" activeclassName="active">Home</NavLink></li>
                  <li className="list"><NavLink to="/shop" activeclassName="active">Shop</NavLink></li>
                  <li className="list"><NavLink to="/about" activeclassName="active">About</NavLink></li>
                  <li className="list"><NavLink to="/contact" activeclassName="active">Contact</NavLink></li>
                </ul>
                <button className="btn"></button>
            </nav>
        </div>
        </div>        
             
        
    )
}

export default Navbar