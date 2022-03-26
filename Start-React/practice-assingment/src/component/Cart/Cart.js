import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRefresh, faShuffle } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const SelectText = () =>{
    return <h3 style={{textAlign:'center', color:'tomato'}}>Please Select Your PC</h3>
}

const Cart = ({item}) => {
    const{name,img}=item;



    return (
        <div className='cart-area'>
            <img src={img} alt="" />
            <p style={{margin:'10px'}}>{name}</p>     
        </div>
    );
};

function Button({handleRandomData}){
    return(
        <div>
             <div className='btn-area'>
           <button  className='shuffle-btn'><p>Pick your Laptop Randomly </p>
            <FontAwesomeIcon icon={faShuffle} />
            </button>
           </div>
           <br />
           <div>
           <button className="shuffle-btn">
                <p>Reset</p>
                <FontAwesomeIcon icon={faRefresh} />
            </button>
           </div>
        </div>
    )
}

// export default Cart;
export{Cart,Button,SelectText}