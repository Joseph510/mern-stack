import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react' 
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { cartItems } from '../data'
import '../styles/wish.css'
const Wish = () => {
    return (
        <>
        <Navbar />
        <div className="wish-container">
               <div className="wish-row">
                <h2 className="wish-title">My Wish List</h2>
               </div>
               <div className="wish-row">

               <div className="wish-col">
                {cartItems.length === 0 ? (<h3 className='info'>Cart is empty. 
                <Link to='/shop' >Go Shopping</Link></h3> ) 
                :(
                    <div className="wish-cards">
                    {cartItems.map((item) => (
                        <div className='wish-card' key={item._id}>
                            <div className="wish-header">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="wish-body">
                                <Link to={`/product/${item.slug}`}>{item.title}</Link>
                                <div className="buttons">
                                    <span  className='wish-quantity'>Quantity : 1</span>
                                    
                                </div>
                            </div>
                            <div className="wish-footer">
                                <span className='wish-price'>{item.price}</span>
                                <button><FontAwesomeIcon icon={faTrashAlt}/></button>
                            </div>
                       </div>
                    ))}     
                </div> 
                )}        
                </div>
                <div className="wish-col">

                </div>
               </div>
            </div>
        <Footer />
    </>
    )
}
export default Wish