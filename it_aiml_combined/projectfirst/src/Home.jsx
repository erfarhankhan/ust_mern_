import React from 'react'

const Home = (props) => {
  return (
    <>
      <h1>Home</h1>
      <article>
        <h3>name:{props.name}</h3>
        <img src="" alt="photo" />
        <p>price:{props.price}</p>
      </article>
    </>
  )
}

export default Home
