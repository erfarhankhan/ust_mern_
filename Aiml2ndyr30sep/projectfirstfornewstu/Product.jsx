import React from 'react'

const Product = (props) => {
  return (
    <div>
      <article>
        <h1>name:{props.name}</h1>
        <img src={props.img} alt="" />
        <p>price:{props.price}</p>
      </article>
    </div>
  )
}

export default Product
