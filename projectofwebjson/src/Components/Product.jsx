import React from 'react'
import "./Product.css"

const Product = ({name,img,price}=props) => {
  return (
    <>
      <article className='art'>
        <h1>Product:{name}</h1>
        <img src={img} alt="pro" />
        <p>price:{price}</p>
      </article>
    </>
  )
}

export default Product;
