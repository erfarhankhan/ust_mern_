import React from 'react'
import Product from './Product'

const Shoppinglist = () => {
       const data = [
        {
            name:"iphone 14",
            img:"https://imgs.search.brave.com/_fJJzozrHAuLXfFXM_1OFCk7wTDTaSXVl4KLoLjVOhM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/OTcyODQ5NTkxNTIt/MzJlZjEzODU1OTMy/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1UQjhmR2x3/YUc5dVpTVXlNREUx/ZkdWdWZEQjhmREI4/Zkh3dw",
            price:"90999"
        },
        {
            name:"ipad",
            img:"https://imgs.search.brave.com/a6zfUGR8KGu8Hr4enJ6SE8MtV4usrKsmy9nzyYFUzW8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/ODI0MjcyODY4NDEt/MWYzZmY3ODg3NTJi/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE9IeDhhWEJo/WkNVeU1HRnBjbnhs/Ym53d2ZId3dmSHg4/TUE9PQ",
            price:"120999"
        },
        {
            name:"macbook",
            img:"https://imgs.search.brave.com/6kSBZXhqMHtAwY9RV3lc3NOwjiwqCRmNnO9z1krKjoQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NjU2MzA5MTY3Nzkt/ZTMwM2JlOTdiNmY1/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1UQjhmRzFo/WTJKdmIydDhaVzU4/TUh4OE1IeDhmREE9",
            price:"211999"
        }
    ]
  return (
    <>
      {
        data.map((d)=>{
            return <Product 
             name={d.name}
             img={d.img}
             price={d.price}
            />
        })
      }
    </>
  )
}

export default Shoppinglist
