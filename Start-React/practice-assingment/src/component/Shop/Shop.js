import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import { Button, Cart, SelectText } from '../Cart/Cart';
import Question from '../Questions/Question';

const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart] = useState([])
    // console.log(cart);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddToCart =(product)=>{
        const newCart = [...cart,product]
        setCart(newCart);
    }
    const handleAddRandomly =(product)=>{
        const newCart = [...cart,product]
        setCart(newCart);
    }

   
    return (
        <div>
            <h1 style={{textAlign:'center', color:'gray'} }>Welcome to <span style={{fontWeight:'bolder', color:'cyan'}}>Computer</span> Duniya</h1>
          <div className='shop'>
              <div className='shop-area'>
              {
                products.map(product=><Product 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                ></Product>)
            }
              </div>
              <div className="cart">
                  <div>
                  <SelectText></SelectText>
                  </div>
                  <div>
                                     
                  {
                      cart.map(item=><Cart key={item.id} item = {item}></Cart>)
                  }
                  </div>

                 <div>
                  <Button></Button>
                 </div>

                 
                  
                  

              </div>
          </div>

          <Question></Question>
            
        </div>
    );
};

export default Shop;