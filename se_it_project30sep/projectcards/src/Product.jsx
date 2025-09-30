import React from 'react'
import './Product.css'
const Product = ({name,img,price}=props) => {
  return (
    <>
   
        <article className='pro'>
        <h2>name: {name}</h2>
        <img src={img} alt="pic" />
        <p>price: {price}</p>
      </article>
    
    </>
  )
}
export default Product;
