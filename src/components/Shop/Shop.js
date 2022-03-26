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
       
        const find = products.find(product=>product.id===selectedProduct);
  
        // console.log(find);
  console.log(find.img);
     const id = document.getElementById('id') ;
     const div = document.createElement('div');
     div.classList.add('dy-cart')
     div.innerHTML=`
     
     <img src="${find.img}" alt=""/>
     <h4>${find.name}</h4>
  
    <div>

     </div>
     
     `;
     id.appendChild(div)

        
  setCart(find)
        
    };
    const choseAddToCurt= (product)=>{
       const id =  Math.floor(Math.random() * 10) + 1;
    let web = product.id;
      web = id;
    console.log(web);

        
    }
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
            <div id='id' >

            </div>
        

        <div>
            <div className='btn-tola'>

        <button onClick={()=>choseAddToCurt(cart)} className='btn-1'> chose for one </button>
        <br />
        <button className='btn-1'>delter</button>
       </div>
        </div>
        </div>
        </div>
    );
};

export default Shop;