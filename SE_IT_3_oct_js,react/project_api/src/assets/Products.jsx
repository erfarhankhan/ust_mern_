import React from 'react'
import "./Products";

const Products = ({id,key,userId,title,body}=props) => {
  return (
    <>
      <h1>Product:</h1>
      <article>
        <h2>Id:{id}</h2>
        <h3>userId:{userId}</h3>
        <h4>title:{title} </h4>
        <p>{body}</p>
      </article>
    </>
  )
}

export default Products
