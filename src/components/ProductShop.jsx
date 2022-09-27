import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/productshop.css'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductShop = ({item}) => {
    return (
        <div className="ps-card">
            <div className="card-header">
                <Link to={`/product/${item.slug}`}>
                <img src={item.image} alt={item.title} />
                </Link>
            </div>

            <div className="card-body">
                <div className="title">{item.title}</div>
                <span>${item.price}</span>
            </div>
            <div className="card-footer">
                <button><FontAwesomeIcon icon = {faHeart}/></button>
                <button><FontAwesomeIcon icon = {faShoppingBag}/></button>
            </div>
        </div>
    )
}

export default ProductShop