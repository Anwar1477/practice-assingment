import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'

const Product = ({product,handleAddToCart}) => {
        // console.log(props);
        const {name,img,price} =product;


    return (
        <div className='product-area'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
           </div>
           <button onClick={()=>handleAddToCart(product)} className='add-btn'>
                <p className='cart-text'>Add to Cart</p>
                <FontAwesomeIcon className='cart-btn' icon={faShoppingCart}></FontAwesomeIcon>
            </button>  
        </div>
    );
};

export default Product;