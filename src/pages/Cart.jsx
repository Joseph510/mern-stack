import React from 'react' 
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/cart.css'
import {cartItems} from '../data'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle, faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = (item) => {
    
    return (
        <>
            <Navbar />
            <div className="cart-container">
               <div className="cart-row">
                <h2 className="cart-title">Shopping Cart</h2>
               </div>
               <div className="cart-row">
                <div className="cart-col">
                {cartItems.length === 0 ? (<h3 className='info'>Cart is empty. 
                <Link to='/shop' >Go Shopping</Link></h3> ) 
                :(
                    <div className="cart-cards">
                    {cartItems.map((item) => (
                        <div className='cart-card' key={item._id}>
                            <div className="cart-header">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="cart-body">
                                <Link to={`/product/${item.slug}`}>{item.title}</Link>
                                <div className="buttons">
                                    <button disabled={item.quantity === item.coutInStock}><FontAwesomeIcon icon={faMinusCircle}/></button>{``}
                                    <span className='cart-quantity'>{item.quantity}</span>{``}
                                    <button disabled={item.quantity === 1}><FontAwesomeIcon icon={faPlusCircle}/></button>
                                </div>
                            </div>
                            <div className="cart-footer">
                                <span className='cart-price'>{item.price}</span>
                                <button><FontAwesomeIcon icon={faTrashAlt}/></button>
                            </div>
                       </div>
                    ))}     
                </div> 
                )}        
                </div>
                 
                
             <div className="cart-col">
                <div className="checkout-card">
                    <div className="checkout-body">
                        <div className="checkout-title">
                            Subtotal  8 items : 850$
                
                        </div>
                    </div>
                    <div className="checkout-footer">
                       <Link to='/Shipping'> Proceed to Checkout</Link>
                    </div>
                </div>
             </div>

            </div>
            </div>
          
            
            <Footer />
        </>
    )
}
export default Cart