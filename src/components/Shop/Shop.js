import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProduct]= useState([]);
    const [cart,setCart]=useState(products);
 
    useEffect(()=>{
    fetch('product.json')
    .then(res=>res.json())
    .then(data=>setProduct(data))
    },[]);



// console.log(cart)
    const handleAddToCart =(selectedProduct)=>{
        
        

        
    };
    // console.log(cart)
   
       
    
    return (
        <div className='shop-container'>
            <div className='products-container'>
                
                   {
                       products.map(product =><Product 
                        product={product}
                        key = {product.id}
                        handleAddToCart={handleAddToCart}
                        >

                        </Product>)
                   }
            </div>
        <div className="cart-container">
            <Cart
           cart={cart}
            
            ></Cart>
        </div>
        </div>
    );
};

export default Shop;