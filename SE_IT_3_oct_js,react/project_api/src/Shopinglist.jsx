import React, { useEffect, useState } from 'react'
import Products from './assets/Products';

const Shopinglist = () => {
    const [data,setData]=useState([]);

    const URL = "https://jsonplaceholder.typicode.com/posts";
    function loadApiData(){
        fetch(URL,{
            method:"GET",
        }).then((res)=>res.json())
        .then((result)=>{
            if(result){
                setData(result);
            }
        }).catch((rej)=>{
            console.log(rej+" reject");
            
        });
    }
    useEffect(()=>{
        loadApiData();
    },[]);

  return (
    <>
        {
            data.map((d)=>{
                return <Products 
                key={d.key}
                id={d.id}
                userId={d.userId}
                title={d.title}
                body={d.title}
                /> 
            })
        }
      
    </>
  )
}

export default Shopinglist
